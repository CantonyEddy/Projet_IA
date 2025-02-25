const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/login', authController.getLoginPage);
router.post('/login', express.urlencoded({ extended: true }), authController.postLogin);
router.get('/logout', authController.logout);

module.exports = router;
