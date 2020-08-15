'use strict';
const { mongoose } = require('../db/mongoose');
mongoose.set('bufferCommands', false);
const { User } = require('../models/User');
const express = require('express');
const { reset } = require('nodemon');
const router = express.Router();
const log = console.log;

router.post('/assignAdmin', (req, res) => {
    if (mongoose.connection.readyState != 1) {
        log('Issue with mongoose connection')
        res.status(500).send('Internal server error')
        return;
    }

    User.findOne({ email: req.body.email }).then((user) => {
        if (!user) {
            res.status(404).send('user not found')
        }
        else {
            user.type = "admin"
            user.reminders = { Task: [] }
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

router.post('/deleteUser', (req, res) => {
    if (mongoose.connection.readyState != 1) {
        log('Issue with mongoose connection')
        res.status(500).send('Internal server error')
        return;
    }

    User.findOneAndDelete({ email: req.body.email }).then((user) => {
        if (!user) {
            res.status(404).send('user not found')
        }
        else {
            res.send('deleted')
        }
    }).catch((error) => {
        log(error)
        res.status(500).send('Internal Server Error')
    })
})

router.get('/getUsers', (req, res) => {
    User.find().then(users => {
        res.send({ users })
    }).catch((error) => {
        log(error)
        res.status(500).send('Internal Server Error')
    })

})


module.exports = router;