const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema(
  {
    donorId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    loc: { type: String, required: true },
    donarName: { type: String, required: true },
    foodItems: [{ type: String, required: true }],
    quantity: { type: Number, required: true },
    status: {
      type: String,
      enum: ["pending", "taken", "completed"],
      default: "pending",
    },
    shelfLife: { type: Number, required: true },
    receiverId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    misc: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Donation", donationSchema);
