const express = require("express");
const {
  getAllVolunteers,
  getAllDonations,
  getValues
} = require("../controllers/admin.controller");
const { adminAuth } = require("../middleware/adminAuth");
const router = express.Router();

// Admin Routes
router.use(adminAuth);
router.get("/", getValues);
router.get("/donations", getAllDonations);
router.get("/volunteer", getAllVolunteers);

module.exports = router;
