/* User mongoose model */
const mongoose = require('mongoose');

const Locations = mongoose.model('Locations', {
  name: {
    type: String,
    required: true,
    minlegth: 1,
    trim: true,
  },
  isAvaliable: {
    type: Boolean,
    required: true,
  },
  address: {
    type: String,
    required: true,
    minlegth: 1,
    trim: true,
  },
  country: {
    type: String,
    required: true,
    minlegth: 1,
    trim: true,
  },
  imageUrl: {
    type: String,
    required: true,
    minlegth: 1,
    trim: true,
  },
  maxOccupancy: {
    type: Number,
    required: true,
    min: 1,
  },
  currOccupancy: {
    type: Number,
    required: true,
    min: 0,
  },
  description: {
    type: String,
    required: true,
    minlegth: 1,
    trim: true,
  },
});

module.exports = { Locations };
