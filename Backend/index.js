<<<<<<< HEAD
const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();
app.listen(PORT, () => {
    console.log(`server running at ${PORT}`)
})


app.use(express.json())
const cors = require('cors')
app.use(cors())




//Routes
const userRoutes = require('./Routes/RoutesUser');
app.use('/api', userRoutes)


const adminRoutes = require('./Routes/RoutesAdmin');
app.use('/api', adminRoutes);


const donateRoutes = require('./Routes/RoutesDonate');
app.use('/api', donateRoutes);


const requestRoutes = require('./Routes/requestRoutes');
app.use('/api', requestRoutes);

const volunteerRoutes = require('./Routes/RoutesVolunteer');
app.use('/api', volunteerRoutes);






//mongodb connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/anadhseva').then(() => {
    console.log("connection successful");
})
    .catch(() => {
        console.log("connection failed")
    })
=======
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const errorHandler = require("./middleware/errorHandling.js");

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

const homeRoutes = require("./Routes/home.route.js");
const userRoutes = require("./Routes/user.route.js");
const donationRoutes = require("./Routes/donation.route.js");
const requestRoutes = require("./Routes/request.route.js");
const adminRoutes = require("./Routes/admin.route.js");
const volunteerRoutes = require("./Routes/volunteer.route.js");
const { validateToken } = require("./middleware/validateToken");

mongoose
  .connect("mongodb://127.0.0.1:27017/food-bank")
  .then(() => console.log("Connected to DataBase successfully..."));

// connecting api endpoint to routes
app.use("/api/", homeRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/donation", donationRoutes);
app.use("/api/request", requestRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/volunteer", volunteerRoutes);
app.use(validateToken);

app.use(errorHandler);

// Start the server
app.listen(port, () => {
    console.log(`Proxy server listening at http://localhost:${port}`);
});
>>>>>>> origin/master
