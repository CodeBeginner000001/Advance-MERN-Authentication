const { VERIFICATION_EMAIL_TEMPLATE, PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, Welcome_Email } = require("./emailTemplates.js");
const { transporter, sender } = require("./NodemailerConfig.js"); 
let src1 = "https://i.pinimg.com/736x/95/70/b4/9570b492dfc2fb57496d52794932580d.jpg"
let src2 = "https://i.pinimg.com/736x/f2/aa/21/f2aa216d9a28f9d5b1799de71023d480.jpg"
let link1 = "https://adarshgoyal-portfolio.vercel.app/"
let link2 = "https://cryptoverse-for-cryptocurrencies.netlify.app/"
let buttonLink = "https://github.com/CodeBeginner000001"
let companyName = sender.name;
let started1 = "Getting Started with protfolio"
let started2 = "Cryptoverse"

const sendVerificationEmail = async(email, verificationToken,expirationTime)=>{
    try {
        const response = await transporter.sendMail({
            from: `"${sender.name}" <${sender.email}>`,
            to: email,
            subject: "Verify your Email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}",verificationToken).replace("{min}",expirationTime),
            category: "Email Verification"
        })
        console.log("Email sent successfully",response);
    } catch (error) {
        console.log("Verfication Code Mailtrap Error:",error.message);
    } 
} 
const sendWelcomeEmail = async(email,user)=>{
    try {
        const response = await transporter.sendMail({
            from: `"${sender.name}" <${sender.email}>`,
            to: email,
            subject: "Welcome Email",
            html: Welcome_Email.replaceAll("{company_info_name}",companyName)
                               .replace("{name}",user)
                               .replace("{buttonlink}",buttonLink)
                               .replace("{img1}",src1)
                               .replace("{img2}",src2)
                               .replace("{link1}",link1)
                               .replace("{link2}",link2)
                               .replaceAll("{started1}",started1)
                               .replaceAll("{started2}",started2),
            category: "Welcome Email"
        })
        console.log("Email sent successfully",response);
    } catch (error) {
        console.log("Welcome mail Mailtrap Error: ",error.message);
    }
}
const sendPasswordResetEmail = async(email,tokenURl)=>{
    try {
        const response = await transporter.sendMail({
            from: `"${sender.name}" <${sender.email}>`,
            to: email,
            subject: "Reset your password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}",tokenURl),
            category: "Password Reset",
        })
        console.log("Reset password link sent: ",response);
    } catch (error) {
        console.log("Reset mail Mailtrap Error: ",error.message);
    }
}
const sendResetSuccessfulEmail = async(email)=>{
    try {
        const response = await transporter.sendMail({
            from: `"${sender.name}" <${sender.email}>`,
            to: email,
            subject: "Password Reset Successful",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
            category: "Password Reset",
        })
        console.log("Password reset confirmation email sent successfully",response);
     }
    catch(error)
    {
        console.log("Password Reset Successful mail Mailtrap Error: ",error.message);
    }
}
module.exports = {sendVerificationEmail,sendWelcomeEmail,sendPasswordResetEmail,sendResetSuccessfulEmail}