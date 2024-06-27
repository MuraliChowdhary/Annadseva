const expressAsyncHandler = require('express-async-handler');
const Donation = require('../models/Donation');
const ReceiverRequest = require('../models/ReceiverRequest');
const User = require('../models/User');

// @api GET api/request
// @desc get all the requests
// @access public
exports.getAllReceiverRequests = expressAsyncHandler(async (req, res) => {
    try {
        const requests = await ReceiverRequest.find({ status: 'open' }).populate('receiverId', 'username email');
        res.json(requests);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch receiver requests' });
    }
});

// Get receiver requests within a certain distance (assume distance is provided in kilometers)
exports.getReceiverRequestsByDistance = async (req, res) => {
    const { distance, userId } = req.query;
    
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        
        // Assuming we have user's location as {latitude, longitude}
        const { latitude, longitude } = user.location;

        const requests = await ReceiverRequest.find({
            status: 'open',
            location: {
                $geoWithin: {
                    $centerSphere: [[longitude, latitude], distance / 6378.1] // distance in radians
                }
            }
        }).populate('receiverId', 'username email');

        res.json(requests);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch receiver requests by distance' });
    }
};

// Post a donation to a specific receiver request
exports.postDonation = async (req, res) => {
    const { donorId, foodItems, quantity, receiverId } = req.body;
    try {
        const newDonation = new Donation({ donorId, foodItems, quantity, receiverId, misc: false });
        await newDonation.save();
        
        // Update receiver request status to fulfilled
        await ReceiverRequest.findByIdAndUpdate(receiverId, { status: 'fulfilled' });

        res.status(201).json(newDonation);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create donation' });
    }
};

// Post a miscellaneous donation
exports.postMiscDonation = async (req, res) => {
    const { donorId, foodItems, quantity } = req.body;
    try {
        const newDonation = new Donation({ donorId, foodItems, quantity, misc: true });
        await newDonation.save();
        res.status(201).json(newDonation);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create miscellaneous donation' });
    }
};
