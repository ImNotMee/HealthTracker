'use strict';
const { mongoose } = require('../db/mongoose');
mongoose.set('bufferCommands', false);
const { CardData } = require('../models/CardData');
const express = require('express');
const router = express.Router();
const log = console.log;

/*logWater*/

router.post('/logWater', (req, res) => {
	const completed = req.body.completed;
	const remaining = req.body.remaining;
	const unit = req.body.unit;
	log(unit)
	CardData.findOne({ unit: unit }).then((card) => {
		card.completed = completed;
		card.remaining = remaining;
		req.session.activeUser = activeUser;
		console.log(activeUser);
		res.send(card)
	}).catch((e) => {
		res.status(500).send('Cannot find card');
	});


})