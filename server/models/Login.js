/* Login model */
'use strict';

const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const LoginSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
});

/**
 * Mongoose middleware to salt and hash login password
 * when saving this login document
 */
LoginSchema.pre('save', function (next) {
  // bind this to Login document instance
  const Login = this;

  // Check password is hashed once
  if (Login.isModified('password')) {
    // generate salt and hash the password
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(login.password, salt, (err, hash) => {
        Login.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

/**
 * Find Login document by given email and password
 * @param {*} email
 * @param {*} password
 */
LoginSchema.statics.findByEmailPassword = function (email, password) {
  // bind this to Login document instance
  const LoginInst = this;
  console.log('CHECK', LoginInst.findOne, email, password);

  // find login doc by unquie email
  return LoginInst.findOne({ email: 'user' }).then((login) => {
    // check if login is found else reject
    console.log('CHECK', login);
    if (!login) {
      console.log('CHECK');
      return Promise.reject('login doc not found');
    }
    // if the login exists, validate the passsword
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, login.password, (err, result) => {
        if (result) {
          resolve(login);
        } else {
          reject(err);
        }
      });
    });
  });
};

// make a model using the User schema
const Login = mongoose.model('Login', LoginSchema);
module.exports = { Login };
