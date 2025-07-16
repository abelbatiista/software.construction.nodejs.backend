const { ENV } = require('../../config');

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: ENV.google.email,
    pass: ENV.google.pass,
  },
});

const sendMail = async ({ to, subject, text }) => {
  try {
    const info = await transporter.sendMail({
      from: `"Abel Batista" <${ENV.google.email}>`,
      to,
      subject,
      text,
    });

    console.log('Email sent:', info.response);
    return info;
  } catch (error) {
    console.error('Error al enviar correo:', error);
    throw error;
  }
};

module.exports = sendMail;
