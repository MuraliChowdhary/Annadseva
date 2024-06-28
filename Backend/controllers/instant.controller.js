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

