
const mongoose = require('mongoose');

const CardData = mongoose.model('CardData', {
    Water: {
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
    },
    Calories: {
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
    },
    BMI: {
        value: {
            type: Number,
            required: true,
            trim: true
        },
        height: {
            type: Number,
            required: true,
            trim: true
        },
        weight: {
            type: Number,
            required: true,
            trim: true
        },
        unit: {
            type: String,
            enum: ['metric', 'standard'],
            required: false,
            trim: true
        }
    },
})


module.exports = { CardData };

