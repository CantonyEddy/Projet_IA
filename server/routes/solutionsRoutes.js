const express = require('express');
const router = express.Router();
const solutionsController = require('../controllers/solutionsController');

router.get('/solutions', solutionsController.getSolutionsPage);

module.exports = router;
