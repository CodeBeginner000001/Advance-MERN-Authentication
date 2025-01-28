const { VERIFICATION_EMAIL_TEMPLATE, PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, Welcome_Email } = require("./emailTemplates.js");
const { client, sender } = require("./MailTrapConfig.js"); 
const src1 = ""
const sendVerificationEmail = async(email, verificationToken,expirationTime)=>{
    const recipient = [{email}] 
    try {
        const response = await client.send({
            from: sender,
            to: recipient,
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
    const recipients = [{email}]
    try {
        const response = await client.send({
            from: sender,
            to: recipients,
            subject: "Welcome Email",
            html: Welcome_Email.replace("{company_info_name}","CodeBeginner000001")
                               .replace("{company_info_name}","CodeBeginner000001")
                               .replace("{company_info_name}","CodeBeginner000001")
                               .replace("{name}",user)
                               .replace("{started1}","Getting Started with protfolio")
                               .replace("{started1}","Getting Started with protfolio")
                               .replace("{started2}","Cryptoverse")
                               .replace("{started2}","Cryptoverse"),
            category: "Welcome Email"
        })
        console.log("Email sent successfully",response);
    } catch (error) {
        console.log("Welcome mail Mailtrap Error: ",error.message);
    }
}

const sendPasswordResetEmail = async(email,tokenURl)=>{
    const recipients = [{email}]
    try {
        const response = await client.send({
            from: sender,
            to: recipients,
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
    const recipients = [{email}]
    try {
        const response = await client.send({
            from: sender,
            to: recipients,
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