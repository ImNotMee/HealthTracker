const DB_URI = 'mongodb://localhost:27017/HealthTrackerApp';

const DB_NAME = 'HealthTrackerApp';

const DB_COLLECTIONS = {
  users: 'users',
  login: 'logins',
};

const DEFAULT_DB_CONNECT_OPS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const ERROR_MSG = {
  connection: "Can't connect to Mongo server.",
};

module.exports = { DB_URI, DB_NAME, DB_COLLECTIONS, DEFAULT_DB_CONNECT_OPS, ERROR_MSG };
