const mongoose = require("mongoose");

const receiverRequestSchema = new mongoose.Schema({
    receiverName: { type: String, required: true },
    receiverId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    loc: { type: String, required: true },
    foodItems: [{ type: String, required: true }],
    quantity: { type: Number, required: true },
    status: { type: String, enum: ['pending', 'taken', 'completed'], default: 'pending' }
}, { timestamps: true });

module.exports = mongoose.model('ReceiverRequest', receiverRequestSchema);
