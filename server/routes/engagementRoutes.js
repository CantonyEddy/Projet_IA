const express = require('express');
const router = express.Router();
const engagementController = require('../controllers/engagementController');

router.get('/engagement', engagementController.getEngagementPage);

module.exports = router;
