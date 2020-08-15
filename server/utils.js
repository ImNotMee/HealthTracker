'use strict';
const { mongoose } = require('./db/mongoose');
mongoose.set('bufferCommands', false);
const { User } = require('./models/User');
const express = require('express');
const log = console.log;

// Middleware for authentication of resources
const authenticate = (req, res, next) => {
	if (req.session.user_id) {
		User.findById(req.session.user_id).then((user) => {
			if (!user) {
				return Promise.reject()
			} else {
				req.user = user
				next()
			}
		}).catch((error) => {
			res.status(401).send("Unauthorized")
		})
	} else {
		res.status(401).send("Unauthorized")
	}
}


module.exports = {
	authenticate
};
