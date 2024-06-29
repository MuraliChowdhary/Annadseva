const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
    {
        donorName: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        receiverName: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        volunteerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        donationId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Donation",
            required: true,
        },
        rloc: { type: String, required: true },
        dloc: { type: String, required: true },
        status: {
            type: String,
            enum: ["pending", "taken", "completed"],
            default: "pending",
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Transaction", transactionSchema);
