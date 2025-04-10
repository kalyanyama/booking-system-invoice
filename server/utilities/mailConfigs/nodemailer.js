const nodemailer = require("nodemailer");
require("dotenv").config();

const Header = `
<p style="text-align: center; padding: 15px 0 0 0;">
<span style="font-family: 'andale mono', monospace; font-size: 16pt; color: #34495e;">AVS Consulting Service.</span>
</p>
`;

const Footer = `
<div style="text-align: center; background-color: #000000; padding: 50px; color: white;">
<p><span style="font-family: arial, helvetica, sans-serif;">If you have any questions or need further assistance, please do not hesitate to contact us.
<div><span style="font-family: arial, helvetica, sans-serif;"><a style="color: blueviolet; text-decoration: none;" href="mailto:info@avsconsultingservice.com" target="_blank" rel="noopener">info@avsconsultingservice.com</a></span></div></span></p>
<p><span style="font-family: arial, helvetica, sans-serif;">Thank you for your prompt attention to this matter.</span></p>
<p><span style="font-family: arial, helvetica, sans-serif;">Best regards,</span></p>
<p style="line-height: 140%; text-align: center;"><span style="font-family: arial, helvetica, sans-serif; font-size: 10pt;"><a style="color: white; text-decoration: none;" href="https://avsconsultingservice.com/">www.avsconsultingservice.com</a></span></p>
</div>
`;

const MAIL_CONFIGERATION = async (template) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.NODEMAIL_HOST,
      port: process.env.NODEMAIL_PORT,
      secure: process.env.NODEMAIL_PORT == 465,
      auth: {
        user: process.env.NODEMAIL_MAIL,
        pass: process.env.NODEMAIL_PASSWORD,
      },
    });

    template.html = `${Header} ${template.html} ${Footer}`;

    const mailData = {
      from: process.env.NODEMAIL_MAIL,
      ...template,
    };

    transporter.sendMail(mailData, (err, result) => {
      if (err) {
        console.log(err);
      }
      return console.log("mail sent to " + template.to);
    });
  } catch (error) {
    throw error;
  }
};

module.exports = MAIL_CONFIGERATION;
