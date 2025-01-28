const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Verify Your Email</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>Thank you for signing up! Your verification code is:</p>
    <div style="text-align: center; margin: 30px 0;">
      <span style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #4CAF50;">{verificationCode}</span>
    </div>
    <p>Enter this code on the verification page to complete your registration.</p>
    <p>This code will expire in {min} minutes for security reasons.</p>
    <p>If you didn't create an account with us, please ignore this email.</p>
    <p>Best regards,<br>Your App Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset Successful</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Password Reset Successful</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>We're writing to confirm that your password has been successfully reset.</p>
    <div style="text-align: center; margin: 30px 0;">
      <div style="background-color: #4CAF50; color: white; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; display: inline-block; font-size: 30px;">
        ✓
      </div>
    </div>
    <p>If you did not initiate this password reset, please contact our support team immediately.</p>
    <p>For security reasons, we recommend that you:</p>
    <ul>
      <li>Use a strong, unique password</li>
      <li>Enable two-factor authentication if available</li>
      <li>Avoid using the same password across multiple sites</li>
    </ul>
    <p>Thank you for helping us keep your account secure.</p>
    <p>Best regards,<br>Your App Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Password Reset</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>We received a request to reset your password. If you didn't make this request, please ignore this email.</p>
    <p>To reset your password, click the button below:</p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="{resetURL}" style="background-color: #4CAF50; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Reset Password</a>
    </div>
    <p>This link will expire in 1 hour for security reasons.</p>
    <p>Best regards,<br>Your App Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;
const Welcome_Email = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome Email</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333333;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background-color: #f1f1f1;
      text-align: center;
      padding: 10px;
    }
    .header h1 {
      color: #333333;
      margin: 0;
    }
    .content {
      background-color: #ffffff;
      padding: 20px;
      color: #000000;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    .content img {
      max-width: 100%;
      height: auto;
      display: block;
    }
    .button {
      display: inline-block;
      padding: 10px 150px;
      margin: 20px 10px;
      background-color: #007BFF;
      text-decoration: none;
      border-radius: 5px;
      text-align: center;
    }
    .links {
      background-color: #fff;
      padding: 15px;
      border-radius: 5px;
      margin-top: 20px;
    }
    .links-item {
      background-color: #ffe4e1;
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }
    .links-item img {
      width: 80px;
      height: auto;
      margin-right: 15px;
      border-radius: 5px;
    }
    .links-item p {
      margin: 0;
      font-weight: bold;
    }
    .footer {
      padding: 10px 0 ;
      text-align: center;
      margin-top: 20px;
      color: #888;
      background-color: #f1f1f1;
      font-size: 0.8em;
    }
    .imageheight{
      height: 100px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>{company_info_name}</h1>
    </div>
    <div class="content">
      <p>Welcome, {name} !</p>
      <p>Thanks for choosing {company_info_name}! We are happy to see you on board.</p>
      <div style="text-align: center; margin: 10px 0;">
      <a href="#" class="button"> 
      <span style="color: black;">Next Step</span>
      </a>
    </div>
      <p>If you need some help to get started, check our:</p>
      <div class="links">
        <div class="links-item">
          <img class="imageheight" src="{img1}" alt="{started1}">
          <p>{started1}</p>
        </div>
        <div class="links-item">
          <img class="imageheight" src="{img2}" alt="{started2}">
          <p>{started2}</p>
        </div>
      </div>
      <p>We hope you enjoy this journey as much as we enjoy creating it for you.</p>
    </div>
    <div class="footer">
      <p>© {company_info_name} • Online • New Delhi, 110023, India</p>
      <a href="#">Unsubscribe</a>
    </div>
  </div>
</body>
</html>
`
module.exports = {VERIFICATION_EMAIL_TEMPLATE,PASSWORD_RESET_SUCCESS_TEMPLATE,PASSWORD_RESET_REQUEST_TEMPLATE,Welcome_Email}