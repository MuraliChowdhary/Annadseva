const express = require('express');
const router = express.Router();
const sendOtp = require('../contollers/otp.controller');

router.post('/', async (req, res) => {
  try {
    const { email } = req.body;
    const otp = await sendOtp({ email });
    res.status(200).json({ message: "OTP sent", otp });
  } catch (error) {
    console.log("Cannot send otp to email")
    console.error(error); // Log the error details
    res.status(500).json({ message: "Error", error: error.message || error });
  }
});

module.exports = router;
