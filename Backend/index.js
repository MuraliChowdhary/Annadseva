const express = require('express');
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');

const PORT = process.env.PORT;
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/anadhseva', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Connection successful");
})
.catch(() => {
    console.log("Connection failed");
});

// Routes
const userRoutes = require('./Routes/RoutesUser');
app.use('/api', userRoutes);

const adminRoutes = require('./Routes/RoutesAdmin');
app.use('/api', adminRoutes);

const donateRoutes = require('./Routes/RoutesDonate');
app.use('/api', donateRoutes);

const requestRoutes = require('./Routes/RoutesRequest');
app.use('/api', requestRoutes);

const volunteerRoutes = require('./Routes/RoutesVolunteer');
app.use('/api', volunteerRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});
