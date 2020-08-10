'use strict';
const { mongoose } = require('../db/mongoose');
mongoose.set('bufferCommands', false);
const { User } = require('../models/User');
const express = require('express');
const { reset } = require('nodemon');
const router = express.Router();
const log = console.log;

router.post('/logBMI', (req, res) => {
	User.findById(req.session.user_id).then((user) => {
		if (!user) {
			res.status(404).send('Resource not found')
		}
		else {
			user.user_card.BMI.value = req.body.value
			user.user_card.BMI.weight = req.body.weight
			user.user_card.BMI.height = req.body.height
			user.user_card.BMI.unit = req.body.unit
			user.save().then((updatedUser) => {
				res.status(200).send(updatedUser)
			}).catch((error) => {
				log(error)
				res.status(400).send('Bad Request')
			})
		}
	}).catch((e) => {
		log('cant find user', e)
		res.status(500).send('Internal Server Error')
	})
})


router.post('/logWater', (req, res) => {
	User.findById(req.session.user_id).then((user) => {
		if (!user) {
			res.status(404).send('Resource not found')
		}
		else {
			user.user_card.Water.completed = req.body.completed
			user.user_card.Water.remaining = req.body.remaining
			user.user_card.Water.unit = req.body.unit
			user.save().then((updatedUser) => {
				res.status(200).send(updatedUser)
			}).catch((error) => {
				log(error)
				res.status(400).send('Bad Request')
            })
		}
	}).catch((e) => {
		log('cant find user', e)
		res.status(500).send('Internal Server Error')
	})
})

router.post('/logCalories', (req, res) => {
	User.findById(req.session.user_id).then((user) => {
		if (!user) {
			res.status(404).send('Resource not found')
		}
		else {
			user.user_card.Calories.completed = req.body.completed
			user.user_card.Calories.remaining = req.body.remaining
			user.user_card.Calories.unit = req.body.unit
			user.save().then((updatedUser) => {
				res.status(200).send(updatedUser)
			}).catch((error) => {
				log(error)
				res.status(400).send('Bad Request')
			})
		}
	}).catch((e) => {
		log('cant find user', e)
		res.status(500).send('Internal Server Error')
	})
})



router.post('/logMood', (req, res) => {
	const value = req.body.value;

	log(req.session.user_id)
	User.findById(req.session.user_id).then((user) => {
		if (!user) {
			res.status(404).send("User not found")
		} else {
			user.user_card.Mood.value = value;
			user.save().then((updatedUser) => {
				log`Updated Mood ${updatedUser}`
				res.status(200).send(updatedUser)
			}).catch((error) => {
				log(error)
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
				log`Updated Sleep ${updatedUser}`
				res.status(200).send(updatedUser)
			}).catch((error) => {
				log(error)
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
				log`Updated Stress ${updatedUser}`
				res.status(200).send(updatedUser)
			}).catch((error) => {
				log(error)
				res.status(400).send('Bad Request') 
			})
		}
	}).catch((error) => {
		res.status(500).send('Internal Server Error')  // server error
	});

});

router.post('/logSickness', (req, res) => {
	const sickness = req.body.sickness;

	log(req.session.user_id)
	User.findById(req.session.user_id).then((user) => {
		if (!user) {
			res.status(404).send("User not found")
		} else {
			user.user_card.Sickness = sickness;
			user.save().then((updatedUser) => {
				log`Updated Sickness ${updatedUser}`
				res.status(200).send(updatedUser)
			}).catch((error) => {
				log(error)
				res.status(400).send('Bad Request') 
			})
		}
	}).catch((error) => {
		res.status(500).send('Internal Server Error')  // server error
	});

});

module.exports = router;