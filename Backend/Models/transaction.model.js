const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    donorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    receiverId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    volunteerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    donationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Donation', required: true },
    status: { type: String, enum: ['pending', 'accepted', 'completed'], default: 'pending' }
}, { timestamps: true });

module.exports = mongoose.model('Transaction', transactionSchema);
