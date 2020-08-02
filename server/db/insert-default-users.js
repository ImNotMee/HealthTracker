'use strict';
const {
  DB_URI,
  DB_NAME,
  DB_COLLECTIONS,
  DEFAULT_DB_CONNECT_OPS,
  ERROR_MSG,
} = require('./constants');
const log = console.log;

const { MongoClient } = require('mongodb');

MongoClient.connect(DB_URI, DEFAULT_DB_CONNECT_OPS, (error, client) => {
  if (error) {
    log(ERROR_MSG.connection, DB_URI, error);
    return;
  }
  log('Connected to mongo server');

  const db = client.db(DB_NAME);

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
          weight: [120, 119, 119, 120, 122, 119, 117],
          sleep: [5, 6, 6, 7, 9, 10, 7],
          calories: [1800, 1899, 2100, 2000, 1789, 1987, 1788],
          stress: [2, 3, 2, 1, 4, 6, 5],
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
