const mongoose = require('mongoose');

/* Connnect to our database */
// Get the URI of the local database, or the one specified on deployment.
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/HealthTrackerApp';
console.log('MONO', mongoURI);
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .catch((error) => {
    console.log('Error connecting to mongodb. Timeout reached.', error);
  });

module.exports = { mongoose }; // Export the active connection.
