const express = require("express");
const {
  postDonation,
  getDonation,
} = require("../controllers/donation.controller");
const { adminAuth } = require("../middleware/adminAuth");
const router = express.Router();

router.get("/donation", getDonation);
router.post("/donation", adminAuth, postDonation); // Example of applying middleware

module.exports = router;
