const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.get('/contact', contactController.getContactPage);
router.post('/contact', express.urlencoded({ extended: true }), contactController.postContactForm);

module.exports = router;
