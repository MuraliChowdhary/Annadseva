const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
    {
        donorName: { type: Schema.Types.ObjectId, ref: "User", required: true },
        receiverName: { type: Schema.Types.ObjectId, ref: "User", required: true },
        volunteerId: { type: Schema.Types.ObjectId, ref: "User" },
        donationId: {
            type: Schema.Types.ObjectId,
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
