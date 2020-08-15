const mongoose = require('mongoose');

const TrendHistorySchema = new mongoose.Schema({
    date: {
      type: String,
      required: true,
      unique: true,
    },
    value: {
      type: Number,
      required: true,
    }
});

const Trends = mongoose.model('Trends', {
  weight: {
    type: [TrendHistorySchema],
    required: true,
  },
  sleep: {
    type: [TrendHistorySchema],
    required: true,
  },
  calories: {
    type: [TrendHistorySchema],
    required: true,
  },
  stress: {
    type: [TrendHistorySchema],
    required: true,
  },
});


const TrendsHistory = mongoose.model('TrendsHistory', TrendHistorySchema);
module.exports = { Trends,TrendsHistory };
