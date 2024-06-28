const express = require("express");
const {
  getAllVolunteers,
  getAllDonations,
  // getValues,
  getAllRequests
} = require("../controllers/admin.controller");
const { adminAuth } = require("../middleware/adminAuth");
const router = express.Router();

// Admin Routes
router.use(adminAuth);
// router.get("/", getValues);
router.get("/donations", getAllDonations);
router.get("/volunteer", getAllVolunteers);
router.get("/requests", getAllRequests);

module.exports = router;
