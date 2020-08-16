'use strict';
const { mongoose } = require('../db/mongoose');
mongoose.set('bufferCommands', false);
const { User } = require('../models/User');
const { Login } = require('../models/Login');
const express = require('express');
const { reset } = require('nodemon');
const router = express.Router();
const { authenticate } = require("../utils.js");
const log = console.log;

router.post('/assignAdmin',authenticate, (req, res) => {
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

router.post('/deleteUser',authenticate, (req, res) => {
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

router.get('/getUsers',authenticate, (req, res) => {
    User.find().then(users => {
        res.send({ users })
    }).catch((error) => {
        log(error)
        res.status(500).send('Internal Server Error')
    })

})

router.post('/setUserInfo',authenticate, (req, res) => {
    if (mongoose.connection.readyState != 1) {
        log('Issue with mongoose connection')
        res.status(500).send('Internal server error')
        return;
    }

    User.findOne({ email: req.body.email }).then((user) => {
        if (!user) {
            Login.findOne({ email: req.body.prevEmail }).then((login) => {
                if (!login) {
                    res.status(404).send('login not found')
                }
                else {
                    login.email = req.body.email
                    login.password = req.body.password
                    login.save().then((updatedLogin) => {
                        res.status(200).send(updatedLogin)
                    }).catch((error) => {
                        log(error)
                        res.status(400).send('Bad Request')
                    })
                }
            }).catch((e) => {
                log('cant find login info', e)
                res.status(500).send('Internal Server Error')
            })
            User.findOne({ email: req.body.prevEmail }).then((currUser) => {
                if (!currUser) {
                    res.status(404).send('user not found')
                }
                else {
                    currUser.firstName = req.body.firstName
                    currUser.lastName = req.body.lastName
                    currUser.hash = req.body.email + req.body.password
                    currUser.sex = req.body.sex
                    currUser.email = req.body.email
                    currUser.save().catch((error) => {
                        log(error)
                        res.status(400).send('Bad Request')
                    })
                }
            }).catch((e) => {
                log('cant find user', e)
                res.status(500).send('Internal Server Error')
            })
        }
        else {
            res.status(404).send('user email already exists')
        }
    }).catch((e) => {
        log('cant find user', e)
        res.status(500).send('Internal Server Error')
    })
})

module.exports = router;
