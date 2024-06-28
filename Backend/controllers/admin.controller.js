const errorHandler = require("express-async-handler");
const Donation = require("../Models/donation.model");
const User = require("../Models/user.model");
const Requests = require("../Models/request.model");

const getAllVolunteers = errorHandler(async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
})

const getAllDonations = errorHandler(async (req, res) => {
    const donations = await Donation.find();
    res.status(200).json(donations);
})

const getAllRequests = errorHandler(async (req, res) => {
    const requests = await Requests.find();
    res.status(200).json(requests);
})

module.exports = {
    getAllDonations, 
    getAllRequests,
    getAllVolunteers
}
