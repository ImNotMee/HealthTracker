'use strict';
const log = console.log;
log('Express server');

const express = require('express');
const path = require('path');

const app = express();

// mongoose and mongo connection
const { mongoose } = require('./db/mongoose');
mongoose.set('bufferCommands', false);
// test comment

// body-parser: middleware for parsing HTTP JSON body into a usable object
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// express-session for managing user sessions
const session = require('express-session');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: 'Shh, its a secret B!',
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60000,
      httpOnly: true,
    },
  }),
);

// initlaize api routes
const RoutesUtil = require('./routes/index');
RoutesUtil.initRoutes(app);

//static public directory for the files in /public
app.use(express.static(__dirname + '../public'));

// Serve the build
app.use(express.static(path.normalize(__dirname + '/..//client/build')));

// All routes other than above will go to index.html
app.get('*', (req, res) => {
  const goodPageRoutes = [
    '/',
    '/signup',
    '/settings',
    '/overview',
    '/trends',
    '/reminders',
    '/calendar',
    '/check-in',
    '/overview/logWeight',
    '/overview/logWater',
    '/overview/logCalories',
    '/overview/logMood',
    '/overview/logSleep',
    '/overview/logStress',
    '/overview/logMedical',
    '/overview/logSick',
    '/reminders/add/:cat?/:sub?/:name?/:time?/:note?/:id?',
    '/manage-users',
    '/trends/admin',
    '/alert-system',
    '/locations/add',
    '/user-profile/:id?',
    '/alert-system/add/:name?/:addr?/:img?/:maxOcc?/:desc?',
  ];

  if (!goodPageRoutes.includes(req.url)) {
    res.status(404);
  }

  res.sendFile(path.normalize(__dirname + '/..//client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  log(`Listening on port ${port}...`);
});
