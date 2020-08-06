'use strict';
const { mongoose } = require('../db/mongoose');
mongoose.set('bufferCommands', false);
const { CardData } = require('../models/CardData');
const { User } = require('../models/User');
const express = require('express');
const { reset } = require('nodemon');
const router = express.Router();
const log = console.log;

router.post('/logMood', (req, res) => {
	const value = req.body.value;

	log(req.session.user_id)
	User.findById(req.session.user_id).then((user) => {
		if (!user) {
			res.status(404).send("User not found")
		} else {
			user.user_card.Mood.value = value;
			user.save().then((updatedUser) => {
				console.log(updatedUser)
				res.status(200).send(updatedUser)
			}).catch((error) => {
				console.log(error)
				res.status(400).send('Bad Request') 
			})
		}
	}).catch((error) => {
		res.status(500).send('Internal Server Error')  // server error
	});
});

router.post('/logSleep', (req, res) => {
	const hours = req.body.hours;
	const quality = req.body.quality;
	const date = req.body.date;

	log(req.session.user_id)
	User.findById(req.session.user_id).then((user) => {
		if (!user) {
			res.status(404).send("User not found")
		} else {
			user.user_card.Sleep.hours = hours;
			user.user_card.Sleep.quality = quality;
			if (date !== null | date !== undefined) {
				user.user_card.Sleep.date = date
			} else {
				user.user_card.Sleep.date = Date.now()
			}
			user.save().then((updatedUser) => {
				console.log(updatedUser)
				res.status(200).send(updatedUser)
			}).catch((error) => {
				console.log(error)
				res.status(400).send('Bad Request') 
			})
		}
	}).catch((error) => {
		res.status(500).send('Internal Server Error')  // server error
	});
});

router.post('/logStress', (req, res) => {
	const value = req.body.value;
	const date = req.body.date;

	log(req.session.user_id)
	User.findById(req.session.user_id).then((user) => {
		if (!user) {
			res.status(404).send("User not found")
		} else {
			user.user_card.Stress.value = value;
			user.user_card.Stress.date = date;
			if (date !== null | date !== undefined) {
				user.user_card.Stress.date = date
			} else {
				user.user_card.Stress.date = Date.now()
			}
			user.save().then((updatedUser) => {
				console.log(updatedUser)
				res.status(200).send(updatedUser)
			}).catch((error) => {
				console.log(error)
				res.status(400).send('Bad Request') 
			})
		}
	}).catch((error) => {
		res.status(500).send('Internal Server Error')  // server error
	});

});

router.post('/logSickness', (req, res) => {
	const completed = req.body.completed;
	const remaining = req.body.remaining;
	const unit = req.body.unit;
	log(req.session.activeUser.email)
	User.findOne({ email: req.session.activeUser.email }).then((user) => {
		log(user)
		res.send(user)
	})

});

module.exports = router;