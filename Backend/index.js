// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();
// // const errorHandler = require("./middleware/errorHandling.js");

// const app = express();
// app.use(cors());
// app.use(express.json());

// const port = process.env.PORT || 3000;

// const homeRoutes = require("./Routes/home.route.js");
// const userRoutes = require("./Routes/user.route.js");
// const donationRoutes = require("./Routes/donation.route.js");
// const requestRoutes = require("./Routes/request.route.js");
// const adminRoutes = require("./Routes/admin.route.js");
// const volunteerRoutes = require("./Routes/volunteer.route.js");
// // const { validateToken } = require("./middleware/validateToken");

// mongoose
//   .connect("mongodb://127.0.0.1:27017/food-bank")
//   .then(() => console.log("Connected to DataBase successfully..."));

// // connecting api endpoint to routes
// app.use("/api/", homeRoutes);
// app.use("/api/auth", userRoutes);
// app.use("/api/donation", donationRoutes);
// app.use("/api/request", requestRoutes);
// app.use("/api/admin", adminRoutes);
// app.use("/api/volunteer", volunteerRoutes);
// // app.use(validateToken);

// // app.use(errorHandler);

// app.listen(port, () => {
//   console.log(`Listening to port ${port}...`);
// });
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 4000;

// Use the cors middleware
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// Proxy endpoint to forward requests to Google Maps API
app.get('/distance', async (req, res) => {
    const { origins, destinations, key } = req.query;
    try {
        const response = await axios.get('https://maps.googleapis.com/maps/api/distancematrix/json', {
            params: {
                origins,
                destinations,
                key,
            },
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching distance:', error.message);
        res.status(500).json({ error: 'Failed to fetch distance.' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Proxy server listening at http://localhost:${port}`);
});
