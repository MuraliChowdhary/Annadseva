const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3001;

const otpRoutes = require('./Routes/otpRoutes'); // Import the OTP routes
const validateOTP = require('./Routes/validateRoute'); // Import the OTP verification routes

mongoose
  .connect('mongodb://127.0.0.1:27017/food-bank', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to DataBase successfully...'))
  .catch(err => console.error('Database connection error:', err));

// Connecting API endpoint to routes
app.use('/api/otp', otpRoutes);
app.use('/api/otpVerify', validateOTP);

app.listen(port, () => {
  console.log(`Listening to port ${port}...`);
});
