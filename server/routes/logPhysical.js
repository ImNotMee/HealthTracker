'use strict';
const { mongoose } = require('../db/mongoose');
mongoose.set('bufferCommands', false);
const { CardData } = require('../models/CardData');
const { User } = require('../models/User');
const express = require('express');
const router = express.Router();
const log = console.log;

/*logWater*/

router.patch('/logWater', (req, res) => {
	const complete = req.body.completed;
	const remain = req.body.remaining;
	const unit = req.body.unit;
	const waterInfo = { completed: complete, remaining: remain, unit: unit }

	User.findById(req.session.user_id).then((user) => {
		if (!user) {
			res.status(404).send('Resource not found')
		}
		else {
			log(user.userCard)
			user.userCard.Water = waterInfo
			log(user.userCard)
			res.send(user)
        }
	}).catch((e) => {
		log('cant find user', e)
    })


})


router.post('/logCalories', (req, res) => {
	const calInfo = { completed: req.body.completed, remaining: req.body.remaining, unit: req.body.unit }
	console.log(calInfo)
	console.log('here')
	User.findById(req.session.user_id).then((user) => {
		if (!user) {
			res.status(404).send('Resource not found')
		}
		else {
			log(user.userCard)
			user.userCard.Calories = calInfo
			log(user.userCard)
			res.send(user)
		}
	}).catch((e) => {
		log('cant find user', e)
	})
})


module.exports = router;