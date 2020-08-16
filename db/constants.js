const DB_URI = 'mongodb+srv://root:root@cluster0.34ubc.mongodb.net/test';

const DB_NAME = 'HealthTrackerApp';

const DB_COLLECTIONS = {
  users: 'users',
  login: 'logins',
  locations: 'locations',
};

const DEFAULT_DB_CONNECT_OPS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const ERROR_MSG = {
  connection: "Can't connect to Mongo server.",
};

module.exports = { DB_URI, DB_NAME, DB_COLLECTIONS, DEFAULT_DB_CONNECT_OPS, ERROR_MSG };
