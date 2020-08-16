function isMongoError(error) {
  // checks for first error returned by promise rejection if Mongo database suddently disconnects
  return typeof error === 'object' && error !== null && error.name === 'MongoNetworkError';
}

const mongoChecker = (req, res, next) => {
  // check mongoose connection established.
  const { mongoose } = require('./mongoose');
  mongoose.set('bufferCommands', false);

  if (mongoose.connection.readyState != 1) {
    log('Issue with mongoose connection');
    res.status(500).send('Internal server error');
    return;
  } else {
    next();
  }
};

module.exports = {
  isMongoError,
  mongoChecker,
};
