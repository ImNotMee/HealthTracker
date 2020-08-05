
const mongoose = require('mongoose');

const CardData = mongoose.model('CardData', {
  
        completed: {
            type: Number,
            required: true,
            trim: true
        },
        remaining: {
            type: Number,
            required: true,
            trim: true
        },
        unit: {
            type: String,
            required: false,
            trim: true
        }
})


module.exports = { CardData };

