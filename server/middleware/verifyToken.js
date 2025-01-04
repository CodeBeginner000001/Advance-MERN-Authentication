const jwt = require('jsonwebtoken')
const verifyToken = (req,res,next)=>{
    const token = req.cookies.token
    if(!token) return res.status(401).json({success:false,message:"Unauthorized - login please"});
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        // console.log(decoded);
        if(!decoded) return res.status(401).json({success:false,message:"Unauthorized - Invalid user "});
        req.userId = decoded.userID
        next();
    }
    catch(error){
        console.log("Verify Token error: ",error);
        return res.status(500).json({success:false, message:"Server Error"});
    }
}
module.exports = {verifyToken};