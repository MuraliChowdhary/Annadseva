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
