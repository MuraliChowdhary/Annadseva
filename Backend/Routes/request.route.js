const express = require("express");
const {
  getAllRequests,
  getRequest,
  postRequest,
  updateRequest,
  deleteRequest
} = require("../controllers/admin.controller");
const { adminAuth } = require("../middleware/adminAuth");
const router = express.Router();

// Admin Routes
router.use(adminAuth);
router.use("/:id").get(getRequest).put(updateRequest).delete(deleteRequest);
router.use("/").get(getAllRequests).post(postRequest);

module.exports = router;
