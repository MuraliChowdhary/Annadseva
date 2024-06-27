const mongoose = require("mongoose");
const { Schema } = mongoose;
const receiverRequestSchema = new mongoose.Schema({
    receiverName: {type: String, required: true},
    receiverId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    loc: { type: String, required: true },
    foodItems: [{ type: String, required: true }],
    quantity: { type: Number, required: true },
    status: { type: String, enum: ['open', 'fulfilled'], default: 'open' }
}, { timestamps: true });

module.exports = mongoose.model('ReceiverRequest', receiverRequestSchema);
