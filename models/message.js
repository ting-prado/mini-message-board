const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
	username: String,
	message: { type: String, required: true },
	timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Message", MessageSchema);
