const MAIL_CONFIGERATION = require("./nodemailer");

const ACCOUNT_VERIFY_MAIL = async (to_email, token) => {
  try {
    const mailData = {
      to: to_email,
      subject: "Account Verification",
      html: `
<p style="padding: 20px 0; font-size: 30px;"><span style="font-family: arial, helvetica, sans-serif;">Email Verification.</span></p>
<p style="font-size: 14px; line-height: 140%; text-align: left;"><span style="font-size: 14pt; line-height: 25.2px; color: #666666; font-family: arial, helvetica, sans-serif;">Hello Dear,</span></p>
<p style="font-size: 14px; line-height: 140%;"><span style="font-size: 14pt; line-height: 25.2px; color: #666666; font-family: arial, helvetica, sans-serif;">We have sent you this email in response to your request to verify your email.</span></p>
<p style="font-size: 14px; line-height: 140%;"><span style="font-size: 14pt; line-height: 25.2px; color: #666666; font-family: arial, helvetica, sans-serif;">To verify your email, please follow the link below:</span></p>
<p style="font-size: 14px; line-height: 140%; text-align: center; padding: 35px;"><span style="font-size: 12pt; line-height: 25.2px; color: #666666; font-family: arial, helvetica, sans-serif;"><a href="https://portal.avsconsultingservice.com/account-verification/${token}" style="background-color: #000000; color: #ffffff; border: none; padding: 20px 50px; text-align: center; text-decoration: none; display: inline-block; font-size: 20px; margin: 4px 2px; cursor: pointer; border-radius: 5px;"> Click to verify  </a></span></p>
<p style="font-size: 14px; line-height: 140%; padding: 15px;"><span style="color: #888888; font-size: 14px; line-height: 19.6px; font-family: arial, helvetica, sans-serif;"><em><span style="font-size: 16px; line-height: 22.4px;">Please ignore this email if you did not request for email verification</span></em></span></p>`,
    };
    await MAIL_CONFIGERATION(mailData);
  } catch (error) {
    throw error;
  }
};

module.exports = ACCOUNT_VERIFY_MAIL;
