const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    donorId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    receiverId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    volunteerId: { type: Schema.Types.ObjectId, ref: 'User' },
    donationId: { type: Schema.Types.ObjectId, ref: 'Donation', required: true },
    status: { type: String, enum: ['pending', 'accepted', 'completed'], default: 'pending' }
}, { timestamps: true });

module.exports = mongoose.model('Transaction', transactionSchema);
