const express = require('express');
const router = express.Router();

// Load each controller
//const authController = require('./auth.js');
const postsController = require('./meals.js');

// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
//router.use('/auth', authController);
router.use('/meals', mealsController);

module.exports = router;
