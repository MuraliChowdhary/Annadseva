const express = require("express");
const {
  getValues
} = require("../controllers/home.controller");
const { adminAuth } = require("../middleware/adminAuth");
const router = express.Router();

// Admin Routes
router.use(adminAuth);
router.get("/", getValues);

module.exports = router;
