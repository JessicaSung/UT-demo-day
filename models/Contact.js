const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
	name: {
		type: String
	},
	email: {
		type: String
	},
	linkedin: {
		type: String
	}
});

module.exports = mongoose.model('Contact', ContactSchema);