const { VERIFICATION_EMAIL_TEMPLATE, PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE } = require("./emailTemplates.js");
const { client, sender } = require("./MailTrapConfig.js"); 
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
            template_uuid: "3f2caa9f-79fa-4b29-b4c9-423929287e1d",
            template_variables: {
                "company_info_name": "CodeBeginner000001",
                "name": user
             }
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