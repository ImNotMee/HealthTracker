function isMongoError(error) {
  // checks for first error returned by promise rejection if Mongo database suddently disconnects
  return typeof error === 'object' && error !== null && error.name === 'MongoNetworkError';
}

module.exports = {
  isMongoError,
};
