// controller is the one that is responsible for the business logic of the application
const User = require("../models/user") 
const bcryptjs = require("bcryptjs")
const crypto = require("crypto")
const generateTokenAndSetCookie = require("../utils/generateTokenAndSetCookie")
const {sendVerificationEmail,sendWelcomeEmail,sendPasswordResetEmail,sendResetSuccessfulEmail} = require("../mailtrap/emails.js")

const signup = async(req,res)=>{ // user SignUp
    const {email,password,name} = req.body; // destructuring the request body
    try {
        // check if any of the data is missing
        if(!email || !password || !name){
            throw new Error("All Fields are Required");
        }
        // check for the user if it exists in the data base using email
        const userExist = await User.findOne({email})
        // if userExist's then return with the status code 400
        if(userExist){
            return res.status(400).json({success:false, message:"user already exists"});
        }
        const hashedPassword = await bcryptjs.hash(password,16); // hashing the password
        const verificationToken = Math.floor(Math.random() * 900000 + 100000).toString(); // 1000000 - 9000000
        // 10 mins - in this expression 0:hours, 10:minutes, 60:seconds, 1000:milliseconds
        const expirationTime = 24*60*60*1000;
        const user = new User({ // creating a new user if the user does not exist
            email,
            password:hashedPassword,
            name,
            verificationToken,
            verificationTokenExpiresAt: Date.now() + expirationTime
            
        })
        await user.save()
        generateTokenAndSetCookie(res,user._id); // jwt
        await sendVerificationEmail(user.email,verificationToken,(expirationTime/(60*60*1000))); // sending the verification email
        res.status(201).json({
            success: true,
            message:"User is created successfully",
            user:{
                ...user._doc,password:undefined,
            }
        })
    } catch (error) {
        console.log("Sign Up Error: ",error.message)
        return res.status(500).json({success:false,message:"Server Error"});
    }
}
const verifyEmail = async(req,res)=>{ // verify email to the user using the code
    // 1 2 3 4 5 6
    const {code} = req.body
    try {
        const user = await User.findOne({ // finding the user based on the code and checking if the code is valid
            verificationToken:code,
            verificationTokenExpiresAt:{$gt:Date.now()} // checking if the time in the verificationTokenExpiresAt s greater than the current time
        })
        if(!user){
            return res.status(400).json({success:false,message:"Invalid Verification Code"}); // if the user does not exist or the code is expired
        }
        user.isVerified = true; // setting the isVerified to true
        user.verificationToken = undefined; // setting the verificationToken to undefined
        user.verificationTokenExpiresAt = undefined; // setting the verificationTokenExpiresAt to undefined
        await user.save();
        await sendWelcomeEmail(user.email,user.name);
        res.status(201).json({
            success:true,
            message:"Welcome Email Sent Successfully",
            user:{
                ...user._doc,
                password:undefined,
            }
        });
    } catch (error) {
        console.log("Verify Email Error: ",error.message)
        return res.status(500).json({success:false,message:"Server Error"});
    }
}
const login = async(req,res)=>{
    const {email,password}=req.body;
    try {
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({success:false,message:"Invalid Email or Password"})
        }
        const isValidPassword = await bcryptjs.compare(password,user.password);
        if(!isValidPassword){
            return res.status(400).json({success:false,message:"Invalid Credentials"})
        }
        generateTokenAndSetCookie(res,user._id); 
        user.lastLogin = new Date();
        await user.save();
        res.status(200).json({
            success:true,
            message:"Login Successful",
            user:{
                ...user._doc,
                password:undefined,
            },
        });
    } catch (error) {
        console.log("Login Error: ",error.message)
        return res.status(500).json({success:false,message:"Server Error"})
    }
}
const logout = async(req,res)=>{
    res.clearCookie("token");
    res.status(200).json({success:true,message:"Logged Out Successfully"})
}
const forgetpassword = async(req,res)=>{
    console.log(req.body); 
    const {email}= req.body;
    try{  
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({success:false,message:"User not found"})
        }
        // Generate reset token
        const resetToken = crypto.randomBytes(20).toString("hex");
        const resetTokenExpiresAt = Date.now() + 10*60*1000;
        user.resetPasswordToken = resetToken;
        user.resetPasswordExpiresAt = resetTokenExpiresAt;
        await user.save();

        // sending an email
        await sendPasswordResetEmail(user.email,`${process.env.CLIENT_URL}/reset-password/${resetToken}`)
        res.status(200).json({success:true, message:"Reset Password Link sent Successfully"})
    }catch(error)
    {
        console.log("forget password Error: ",error.message)
        return res.status(500).json({success:false,message:"Server Error"})
    }
}
const resetpassword = async(req,res)=>{
try {
    const {token} = req.params;
    const {password} = req.body;
    const user = await User.findOne({
        resetPasswordToken: token,
        resetPasswordExpiresAt: {$gt: Date.now()},
    })
    if(!user){
        return res.status(400).json({success:false,message:"Invalid or expired reset link"})
    }
    const hashedPassword = await bcryptjs.hash(password,10);
    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpiresAt = undefined;
    await user.save();
    await sendResetSuccessfulEmail(user.email);
    res.status(200).json({success:true,message:"Password Reset Successfully"})
} catch (error) {
    console.log("reset password Error: ",error.message)
    return res.status(500).json({success:false,message:"Server Error"})
}

}
const checkAuth = async(req,res)=>{
    try {
        const user = await User.findById(req.userId).select("-password");
        if(!user){
            return res.status(400).json({success:false,message:"User not found"});
        }
        res.status(200).json({success:true, user})
    } catch (error) {
        console.log("CheckAuth Error: ",error)
        return res.status(500).json({success:false,message:"Server Error"});
    }
}
module.exports = {signup,login,logout,verifyEmail,forgetpassword,resetpassword,checkAuth}