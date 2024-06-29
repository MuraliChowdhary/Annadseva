const express = require("express");
// const {
//   getAllRequests,
//   getRequest,
//   postRequest,
//   updateRequest,
//   deleteRequest
// } = require("../controllers/admin.controller");
const { adminAuth } = require("../middleware/adminAuth");
const router = express.Router();
const requestRoute = require("../controllers/request.controller");
// Admin Routes
router.use(adminAuth);
// router.use("/:id").get(getRequest).put(updateRequest).delete(deleteRequest);
// router.use("/").get(getAllRequests).post(postRequest);
router.post("/request", requestRoute.createReceiverRequest);
router.get("/request", requestRoute.getAllRequests);
module.exports = router;
