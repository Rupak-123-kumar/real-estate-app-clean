const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (options) => {
  try {
    console.log("SENDGRID API KEY:", process.env.SENDGRID_API_KEY ? "LOADED" : "NOT LOADED");
    console.log("EMAIL FROM:", process.env.EMAIL_FROM);

    const msg = {
      to: options.email,              // receiver
      from: process.env.EMAIL_FROM,   // VERIFIED sender (SendGrid)
      subject: options.subject,
      html: options.message,
    };

    await sgMail.send(msg);

    console.log("✅ Email sent successfully via SendGrid");
  } catch (error) {
    console.error("❌ SENDGRID EMAIL ERROR:", error.response?.body || error.message);
    throw error;
  }
};

module.exports = sendEmail;
