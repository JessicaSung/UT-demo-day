const express = require('express');

const router = express.Router();

// Controllers
const contactRoute = require('../controllers/contact');

// Routes
router.use('/contact', contactRoute);


module.exports = router;