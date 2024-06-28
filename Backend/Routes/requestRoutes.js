const express = require('express');
const router = express.Router();
const { getAllRequests, getCompletedRequests, getFulfilledReceiverRequests, getAcceptedRequests } = require('../controllers/request.controller');

// Route to get all requests
router.get('/', getAllRequests);

// Route to get completed requests
router.get('/completed', getCompletedRequests);

// Route to get fulfilled receiver requests
router.get('/fulfilled', getFulfilledReceiverRequests);

// Route to get fulfilled receiver requests
router.get('/accepted', getAcceptedRequests);

module.exports = router;
