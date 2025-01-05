const { MailtrapClient } = require("mailtrap");
const dotenv = require("dotenv");
dotenv.config();

const client = new MailtrapClient({
  token: process.env.MAILTRAP_TOKEN,
});

// console.log(process.env.MAILTRAP_TOKEN);
const sender = {
  email: "hello@demomailtrap.com",
  name: "CodeBeginner000001",
};

module.exports = {client,sender}
