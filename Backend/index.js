// index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
// const errorHandler = require('./middleware/errorHandling.js');

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

const otpRoutes = require('./Routes/otpRoutes'); // Import the OTP routes

mongoose
  .connect('mongodb://127.0.0.1:27017/food-bank')
  .then(() => console.log('Connected to DataBase successfully...'))
  .catch(err => console.error('Database connection error:', err));

// Connecting API endpoint to routes
app.use('/api/otp', otpRoutes); // Use the OTP routes

// app.use(errorHandler); // Uncomment this if errorHandler is defined

app.listen(port, () => {
  console.log(`Listening to port ${port}...`);
});
