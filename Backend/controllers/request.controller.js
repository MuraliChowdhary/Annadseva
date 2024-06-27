// controllers/requestController.js
const ReceiverRequest = require('../Models/request.model');

const createReceiverRequest = async (req, res) => {
  const { receiverName, receiverId, loc, foodItems, quantity } = req.body;

  try {
    const newRequest = new ReceiverRequest({
      receiverName,
      receiverId,
      loc,
      foodItems,
      quantity,
    });

    const savedRequest = await newRequest.save();
    res.status(201).json(savedRequest);
  } catch (error) {
    res.status(400).json({ message: 'Error creating request', error });
  }
};

module.exports = {
  createReceiverRequest
};
