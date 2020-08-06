'use strict';
const { mongoose } = require('../db/mongoose');
mongoose.set('bufferCommands', false);
const { CardData } = require('../models/CardData');
const { User } = require('../models/User');
const express = require('express');
const router = express.Router();
const log = console.log;

/*logWater*/

router.post('/logWater', (req, res) => {
	const completed = req.body.completed;
	const remaining = req.body.remaining;
	const unit = req.body.unit;
	log(req.session.activeUser.email)
	User.findOne({ email: req.session.activeUser.email }).then((user) => {
		log(user)
		res.send(user)
	})

})

module.exports = router;