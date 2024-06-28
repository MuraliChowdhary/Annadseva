const Otp = require('../models/otp.model');
const generateOtp = require('../utils/generateOtp');
const sendEmail = require('../utils/sendEmail');
const { hashData } = require('../utils/hashData');
const { AUTH_EMAIL } = process.env;

const sendOtp = async ({ email }) => {
  try {
    if (!email) {
      throw new Error("Provided invalid credentials");
    }

    await Otp.deleteOne({ email });

    const generatedOtp = await generateOtp();

    const mailOptions = {
      from: AUTH_EMAIL,
      to: email,
      subject: "OTP for login",
      html: `<h1>OTP for login</h1><p>${generatedOtp}</p>`
    };

    await sendEmail(mailOptions);
    const hashedOtp = await hashData(generatedOtp);
    const newOtp = new Otp({
      email,
      otp: hashedOtp,
      createdAt: Date.now(),
      expiresAt: Date.now() + 3600000, // 1 hour expiry
    });

    const createdOtpRecord = await newOtp.save();
    return createdOtpRecord;
  } catch (err) {
    throw new Error(err.message);
    console.error(err); // Log the error details
    throw err;
  }
};

module.exports = sendOtp;
