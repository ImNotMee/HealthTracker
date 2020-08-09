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

  db.collection(DB_COLLECTIONS.locations).insertMany(
    [
      {
        id: "Queen's Park",
        name: "Queen's Park",
        isAvaliable: true,
        address: '111 Wellesley St W, Toronto, ON',
        country: 'Canada',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Looking_down_University_Avenue_Toronto_August_2012.jpg/1200px-Looking_down_University_Avenue_Toronto_August_2012.jpg',
        maxOccupancy: 53,
        currOccupancy: 52,
        description: 'some information about the park',
      },
    ],
    (error, result) => {
      if (error) {
        log("Can't insert deafult locations", error);
      } else {
        log(result.ops);
        log(result.ops[0]._id.getTimestamp());
      }
      // close connection
      client.close();
    },
  );

  db.collection(DB_COLLECTIONS.login).insertMany([userLogin, adminLogin], (error, result) => {
    if (error) {
      log("Can't insert deafult logins", error);
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
              time: '2020-07-27',
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
              date:"2020-08-01",
              value: 120,
            },
            {
              date:"2020-08-02",
              value: 121,
            },
            {
              date:"2020-08-03",
              value: 124,
            },
            {
              date:"2020-08-04",
              value: 121,
            },
            {
              date:"2020-08-05",
              value: 119,
            },
            {
              date:"2020-08-06",
              value: 118,
            },
            {
              date:"2020-08-07",
              value: 120,
            }
          ],
          sleep: [  {
              date:"2020-08-01",
              value: 7,
            },
            {
              date:"2020-08-02",
              value: 5,
            },
            {
              date:"2020-08-03",
              value: 5,
            },
            {
              date:"2020-08-04",
              value: 7,
            },
            {
              date:"2020-08-05",
              value: 6,
            },
            {
              date:"2020-08-06",
              value: 8,
            },
            {
              date:"2020-08-07",
              value: 9,
            }],
          calories: [  {
              date:"2020-08-01",
              value: 1600,
            },
            {
              date:"2020-08-02",
              value: 2000,
            },
            {
              date:"2020-08-03",
              value: 2200,
            },
            {
              date:"2020-08-04",
              value: 2300,
            },
            {
              date:"2020-08-05",
              value: 1900,
            },
            {
              date:"2020-08-06",
              value: 1987,
            },
            {
              date:"2020-08-07",
              value: 1876,
            }],
          stress: [  {
              date:"2020-08-01",
              value: 1,
            },
            {
              date:"2020-08-02",
              value: 6,
            },
            {
              date:"2020-08-03",
              value: 3,
            },
            {
              date:"2020-08-04",
              value: 5,
            },
            {
              date:"2020-08-05",
              value: 4,
            },
            {
              date:"2020-08-06",
              value: 3,
            },
            {
              date:"2020-08-07",
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
