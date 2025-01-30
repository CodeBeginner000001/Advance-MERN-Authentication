const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL,
    pass: process.env.PASS, // Use an app password or OAuth2
  },
});

// console.log(process.env.MAILTRAP_TOKEN);
const sender = {
  email: process.env.GMAIL,
  name: "CodeBeginner000001",
};

module.exports = {transporter,sender}
