const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Message = require("../models/message");
const fns = require("date-fns");

/* GET home page. */
router.get("/", (req, res) => {
	Message.find()
		.sort({ timestamp: -1 })
		.then((result) =>
			res.render("index", { messages: result, format: fns.format })
		);
});

/* New message */
router.post("/new", (req, res) => {
	const { username, message } = req.body;
	const post = new Message({
		username: username ? username : "Anonymous",
		message
	});

	post
		.save()
		.then((result) => res.redirect("/"))
		.catch((err) => console.log(err));
});

module.exports = router;
