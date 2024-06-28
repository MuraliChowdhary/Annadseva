const express = require("express");
const {
  postDonation
} = require("../controllers/donation.controller");
const router = express.Router();

router.use("/donations").post(postDonation);

module.exports = router;
