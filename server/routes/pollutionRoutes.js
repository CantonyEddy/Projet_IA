const express = require('express');
const router = express.Router();
const pollutionController = require('../controllers/pollutionController');

router.get('/pollution', pollutionController.getPollutionPage);

module.exports = router;