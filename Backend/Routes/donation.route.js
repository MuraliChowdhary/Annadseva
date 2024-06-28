const express = require("express");
const {
  postDonation
} = require("../controllers/donation.controller");
const { adminAuth } = require("../middleware/adminAuth");
const router = express.Router();

// Admin Routes
router.use(adminAuth);
router.use("/donations").post(postDonation);

module.exports = router;
