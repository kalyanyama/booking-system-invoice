const MAIL_CONFIGERATION = require("./nodemailer");

const BOOKING_MAIL_SENDER = async (to_email, to_name, slot_date, file) => {
  try {
    const mailData = {
      to: to_email,
      headers: {
        "X-Priority": "3",
        "X-MSMail-Priority": "Normal",
        Importance: "Normal",
      },
      subject: "Invoice Generated - Payment Request",
      html: `<p><span style="font-family: arial, helvetica, sans-serif;">Dear <strong>${to_name}</strong></span></p>
<p><span style="font-family: arial, helvetica, sans-serif;">We hope this message finds you well.</span></p>
<p><span style="font-family: arial, helvetica, sans-serif;">We are writing to inform you that your booking slot has been successfully generated on <strong>${slot_date}</strong>.
 We kindly request you to settle the outstanding amount of <strong> ₹499/-</strong> at your earliest convenience by visiting our office.</span></p>`,
      attachments: [
        {
          filename: to_name + "-avsbooking-invoice",
          content: file,
          encoding: "base64",
        },
      ],
    };
    await MAIL_CONFIGERATION(mailData);
  } catch (error) {
    throw error;
  }
};

module.exports = BOOKING_MAIL_SENDER;
