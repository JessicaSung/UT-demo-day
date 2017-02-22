const express = require('express');
const mongoose = require('mongoose');

// Models
const Contact = require('../models/Contact');

const router = express.Router();


// Routes
router.post('/save', function(req, res) {
	Contact.collection.insert( req.body );
	res.json({ status: 'success' });
});


module.exports = router;