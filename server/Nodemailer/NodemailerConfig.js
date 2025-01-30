const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: "ashu2100ag@gmail.com",
    pass: "zzvb oyvc cafa ywix", // Use an app password or OAuth2
  },
});

// console.log(process.env.MAILTRAP_TOKEN);
const sender = {
  email: "ashu2100ag@gmail.com",
  name: "CodeBeginner000001",
};

module.exports = {transporter,sender}
