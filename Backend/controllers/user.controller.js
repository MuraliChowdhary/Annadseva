const User = require("../Models/user.model");
const { sendOtp, verifyOTP } = require('../contollers/otp.controller'); // Assuming you have an OTP controller
const { sendEmail } = require('../utils/sendEmail');

const loginUser = async (req, res) => {
  try {
    const { email } = req.body;

    // Check if the email exists in the database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found with this email' });
    }

    // Send OTP to the user's email
    const otpRecord = await sendOtp({ email });

    // You can return the OTP record or a success message
    res.status(200).json({
      message: 'OTP sent to the email. Please verify to log in.',
      otpRecord,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};

const verifyUserOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    // Verify OTP
    const isOtpValid = await verifyOTP({ email, otp });

    if (isOtpValid) {
      res.status(200).json({ message: 'OTP verified successfully. User logged in.' });
    } else {
      res.status(400).json({ message: 'Invalid or expired OTP' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'OTP verification failed', error: error.message });
  }
};

module.exports = { loginUser, verifyUserOtp };
