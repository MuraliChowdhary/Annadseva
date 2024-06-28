const express = require('express');
const router = express.Router();
const { getAllRequests, getCompletedRequests, getFulfilledReceiverRequests } = require('../controllers/request.controller');

// Route to get all requests
router.get('/', getAllRequests);

// Route to get completed requests
router.get('/completed', getCompletedRequests);

// Route to get fulfilled receiver requests
router.get('/fulfilled', getFulfilledReceiverRequests);



module.exports = router;
