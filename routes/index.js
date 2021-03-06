//Routes
'use strict';
const auth = require('./auth');
const signup = require('./signup');
const logCardData = require('./logCardData');
const manageUser = require('./manageUser');
const reminder = require('./reminder');
const locations = require('./locations');
const checkinsys = require('./check-in');
const trends = require('./trends');
const streaks = require('./streaks');
const notifs = require('./notifs');

/**
 * Add routes to given express app object
 * @param {object} app - api express app
 */
const initRoutes = (app) => {
  // set all the server things
  app.use(function (req, res, next) {
    // Website you wish to allow to connect
    // TODO change header to 5000
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PATCH, PUT');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
  });

  app.use('/locations', locations);
  app.use('/auth', auth);
  app.use('/account', signup);
  app.use('/logCardData', logCardData);
  app.use('/reminder', reminder);
  app.use('/checkinsys', checkinsys);
  app.use('/trends', trends);
  app.use('/streaks', streaks);
  app.use('/manageUser', manageUser);
  app.use('/notifs', notifs);
};

module.exports = {
  initRoutes,
};
