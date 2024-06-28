const { request } = require('express');
const Donation = require('../Models/donation.model'); // Adjust the path as per your project structure
const ReceiverRequest = require('../Models/request.model');
const Transaction = require('../Models/transaction.model.js');

const getAllRequests = async (req, res) => {
    try {
        const requests = await Donation.find();
        res.status(200).json(requests);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getCompletedRequests = async (req, res) => {
    try {
        const requests = await Donation.find({ status: 'completed' });
        res.status(200).json(requests);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getFulfilledReceiverRequests = async (req, res) => {
    try {
        const requests = await ReceiverRequest.find({ status: 'fulfilled' });
        res.status(200).json(requests);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAcceptedRequests = async (req, res) => {
    try {
        const transactions = await Transaction.find({
            status: { $in: ['accepted', 'completed'] }
        });
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching transactions', error });
    }
};



module.exports = { getAllRequests, getCompletedRequests, getFulfilledReceiverRequests, getAcceptedRequests };
