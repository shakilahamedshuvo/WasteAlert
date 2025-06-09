const dotenv = require('dotenv')
require('dotenv').config();
const nodemailer = require('nodemailer');

module.exports = async (to, text) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

 return await transporter.sendMail({
    from: '"WasteAlert" <your@gmail.com>',
    to,
    subject: 'OTP Verification',
    text,
  });
};
