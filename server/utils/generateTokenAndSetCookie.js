const jwt = require("jsonwebtoken")
const generateTokenAndSetCookie = (res,userID)=>{
    const token = jwt.sign({userID},process.env.JWT_SECRET,{
        expiresIn: "7d", // expires in 7 days
    })

    res.cookie("token",token,{
        httpOnly: true, // secure attacks like XSS - when an attacker injects malicious scripts into web pages viewed by users, potentially compromising their data and session.
        secure: process.env.NODE_ENV === "production", // secure cookie, only sent over HTTPS
        sameSite: process.env.NODE_ENV === "production" ? "none" : "strict", // "none" required for cross-site cookies in production
        maxAge: 7 * 24 * 60 * 60 * 1000, // expires in 7 days
    })

    return token;
}
module.exports = generateTokenAndSetCookie;