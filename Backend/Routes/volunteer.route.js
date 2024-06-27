const express = require("express");
const {
  getAllTransactions,
  updateTransaction
} = require("../controllers/volunteer.controller");
const { adminAuth } = require("../middleware/adminAuth");
const router = express.Router();

// Admin Routes
// router.use(adminAuth);
// router.use("/").get(getAllTransactions).put(updateTransaction);

module.exports = router;
