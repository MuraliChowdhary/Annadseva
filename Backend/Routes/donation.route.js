const express = require("express");
const {
  postDonation
} = require("../controllers/donation.controller");
const router = express.Router();

router.post("/donations", postDonation);

module.exports = router;
