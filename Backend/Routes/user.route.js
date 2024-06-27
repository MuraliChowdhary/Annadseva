const express = require("express");
const {
  loginUser,
  registerUser
} = require("../controllers/admin.controller");
const { adminAuth } = require("../middleware/adminAuth");
const router = express.Router();

// Admin Routes
router.use(adminAuth);
// router.post("/login", loginUser);
// router.post("/register", registerUser);

module.exports = router;
