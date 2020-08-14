'use strict';
const { mongoose } = require('../db/mongoose');
mongoose.set('bufferCommands', false);
const { CardData } = require('../models/CardData')
const { User } = require('../models/User');
const express = require('express');
const router = express.Router();
const log = console.log;

// helper function 
function get_this_month (card, month) {
  const card_date = new Date(card.date)
  const card_month = card_date.getMonth()
  return month === card_month
}

// the functions below returns a list of dates for completed
// month goes from 0 to 11
router.post('/weight', (req, res) => {
  const id = req.session.user_id;
  const month = req.body.month
  let completed = [];

	User.findById(id).then((user) => {
		if (!user) {
			res.status(404).send("User not found")
		} else {
      user.trends.filter((card) => get_this_month(card, month))
      .filter(card => card.BMI.completed === true )
      .forEach((card) => {
        completed.push(card.date)
      })
      if (user.user_card.BMI.completed === true) {
        completed.push(user.user_card.date)
      }
      res.send(completed)
		}
	}).catch((error) => {
		res.status(500).send('Internal Server Error')  // server error
	});
});


router.post('/water', (req, res) => {
  const id = req.session.user_id;
  const month = req.body.month
  let completed = [];

  User.findById(id).then((user) => {
    if (!user) {
      res.status(404).send("User not found")
    } else {
      user.trends.filter((card) => get_this_month(card, month))
      .filter(card => card.Water.completed === true )
      .forEach((card) => {
        completed.push(card.date)
      })
      if (user.user_card.Water.completed === true) {
        completed.push(user.user_card.date)
      }
      res.send(completed)
    }
  }).catch((error) => {
      res.status(500).send('Internal Server Error')  // server error
  });
});
  

router.post('/calories', (req, res) => {
  const id = req.session.user_id;
  const month = req.body.month
  let completed = [];

  User.findById(id).then((user) => {
    if (!user) {
      res.status(404).send("User not found")
    } else {
      user.trends.filter((card) => get_this_month(card, month))
      .filter(card => card.Calories.completed === true )
      .forEach((card) => {
        completed.push(card.date)
      })
      if (user.user_card.Calories.completed === true) {
        completed.push(user.user_card.date)
      }
      res.send(completed)
    }
  }).catch((error) => {
      res.status(500).send('Internal Server Error')  // server error
  });
});
  
router.post('/mood', (req, res) => {
  const id = req.session.user_id;
  const month = req.body.month
  let completed = [];

  User.findById(id).then((user) => {
    if (!user) {
      res.status(404).send("User not found")
    } else {
      user.trends.filter((card) => get_this_month(card, month))
      .filter(card => card.Mood.completed === true )
      .forEach((card) => {
        completed.push(card.date)
      })
      if (user.user_card.Mood.completed === true) {
        completed.push(user.user_card.date)
      }
      res.send(completed)
    }
  }).catch((error) => {
      res.status(500).send('Internal Server Error')  // server error
  });
});
  

router.post('/sleep', (req, res) => {
  const id = req.session.user_id;
  const month = req.body.month
  let completed = [];

  User.findById(id).then((user) => {
    if (!user) {
      res.status(404).send("User not found")
    } else {
      user.trends.filter((card) => get_this_month(card, month))
      .filter(card => card.Sleep.completed === true )
      .forEach((card) => {
        completed.push(card.date)
      })
      if (user.user_card.Sleep.completed === true) {
        completed.push(user.user_card.date)
      }
      res.send(completed)
    }
  }).catch((error) => {
      res.status(500).send('Internal Server Error')  // server error
  });
});
  


router.post('/stress', (req, res) => {
  const id = req.session.user_id;
  const month = req.body.month
  let completed = [];

  User.findById(id).then((user) => {
    if (!user) {
      res.status(404).send("User not found")
    } else {
      user.trends.filter((card) => get_this_month(card, month))
      .filter(card => card.Stress.completed === true )
      .forEach((card) => {
        completed.push(card.date)
      })
      if (user.user_card.Stress.completed === true) {
        completed.push(user.user_card.date)
      }
      res.send(completed)
    }
  }).catch((error) => {
      res.status(500).send('Internal Server Error')  // server error
  });
});
  


module.exports = router;
