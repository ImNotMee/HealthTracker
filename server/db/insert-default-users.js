'use strict';

const bcrypt = require('bcryptjs');
const { MongoClient } = require('mongodb');
const {
  DB_URI,
  DB_NAME,
  DB_COLLECTIONS,
  DEFAULT_DB_CONNECT_OPS,
  ERROR_MSG,
} = require('./constants');
const log = console.log;

let salt = bcrypt.genSaltSync(10, this.saltRounds);
const userLogin = {
  email: 'user',
  password: bcrypt.hashSync('user', salt),
};

salt = bcrypt.genSaltSync(10, this.saltRounds);
const adminLogin = {
  email: 'admin',
  password: bcrypt.hashSync('admin', salt),
};

MongoClient.connect(DB_URI, DEFAULT_DB_CONNECT_OPS, (error, client) => {
  if (error) {
    log(ERROR_MSG.connection, DB_URI, error);
    return;
  }
  log('Connected to mongo server');

  const db = client.db(DB_NAME);

  db.collection(DB_COLLECTIONS.login).insertMany([userLogin, adminLogin], (error, result) => {
    if (error) {
      log("Can't insert deafult users", error);
    } else {
      log(result.ops);
      log(result.ops[0]._id.getTimestamp());
    }
    // close connection
    client.close();
  });

  db.collection(DB_COLLECTIONS.users).insertMany(
    [
      {
        firstName: 'Ben',
        lastName: 'John',
        hash: 'useruser',
        sex: 'male',
        email: 'user',
        type: 'user',
        timers: [],
        checkInHistory: [],
        reminders: {
          'Medical Health': [
            {
              id: 'r01',
              category: 'Medical Health',
              subCategory: 'Appointments',
              name: 'Annual Check Up',
              time: '2020-07-27T10:15',
              note: 'Call Dr.Jones 1hr before',
              status: 'active',
            },
          ],
          'Mental Health': [],
          'Physical Health': [],
          otherReminders: null,
        },
        notifications: [
          {
            id: 'unique',
            type: 'Alert',
            title: 'Welcome Explor The Check-In Alert System =D',
            message: 'explor our app',
          },
        ],
        trends: {
          weight: [
            {
              date:"2020-08-01T10:15",
              value: 120,
            },
            {
              date:"2020-08-02T10:15",
              value: 121,
            },
            {
              date:"2020-08-03T10:15",
              value: 124,
            },
            {
              date:"2020-08-04T10:15",
              value: 121,
            },
            {
              date:"2020-08-05T10:15",
              value: 119,
            },
            {
              date:"2020-08-06T10:150",
              value: 118,
            },
            {
              date:"2020-08-07T10:15",
              value: 120,
            }
          ],
          sleep: [  {
              date:"2020-08-01T10:15",
              value: 7,
            },
            {
              date:"2020-08-02T10:15",
              value: 5,
            },
            {
              date:"2020-08-03T10:15",
              value: 5,
            },
            {
              date:"2020-08-04T10:15",
              value: 7,
            },
            {
              date:"2020-08-05T10:15",
              value: 6,
            },
            {
              date:"2020-08-06T10:15",
              value: 8,
            },
            {
              date:"2020-08-07T10:15",
              value: 9,
            }],
          calories: [  {
              date:"2020-08-01T10:15",
              value: 1600,
            },
            {
              date:"2020-08-02T10:15",
              value: 2000,
            },
            {
              date:"2020-08-03T10:15",
              value: 2200,
            },
            {
              date:"2020-08-04T10:15",
              value: 2300,
            },
            {
              date:"2020-08-05T10:15",
              value: 1900,
            },
            {
              date:"2020-08-06T10:15",
              value: 1987,
            },
            {
              date:"2020-08-07T10:15",
              value: 1876,
            }],
          stress: [  {
              date:"2020-08-01T10:15",
              value: 1,
            },
            {
              date:"2020-08-02T10:15",
              value: 6,
            },
            {
              date:"2020-08-03T10:15",
              value: 3,
            },
            {
              date:"2020-08-04T10:15",
              value: 5,
            },
            {
              date:"2020-08-05T10:15",
              value: 4,
            },
            {
              date:"2020-08-06T10:15",
              value: 3,
            },
            {
              date:"2020-08-07T10:15",
              value: 3,
            }],
        },
      },
      {
        firstName: 'IAmAdmin',
        lastName: 'John',
        email: 'admin',
        hash: 'adminadmin',
        timers: [],
        type: 'admin',
        reminders: {
          Tasks: [
            {
              id: 'r0',
              category: 'Tasks',
              subCategory: undefined,
              name: 'Complete important admin work',
              time: '2020-07-12T21:15',
              note: 'call Jack to check if he wants to come help',
              status: 'active',
            },
          ],
        },
        notifications: [],
      },
    ],
    (error, result) => {
      if (error) {
        log("Can't insert deafult users", error);
      } else {
        log(result.ops);
        log(result.ops[0]._id.getTimestamp());
      }
      // close connection
      client.close();
    },
  );
});
