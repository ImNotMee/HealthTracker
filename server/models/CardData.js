
const mongoose = require('mongoose');

const BMISchema = new mongoose.Schema({
    value: {
        type: Number,
        required: true,
    }, height: {
        type: Number,
        required: true,
    }, weight: {
        type: Number,
        required: true,
    }, unit: {
        type: String,
        required: false,
        lowercase: true,
        trim: true,
        enum: ["metric", "standard"],
        default: "metric",
    }, streak: {
        type: Boolean,
        required: true,
        default: false,
    },
})

const WaterSchema = new mongoose.Schema({
    completed: {
        type: Number,
        required: true,
        trim: true
    }, remaining: {
        type: Number,
        required: true,
        trim: true
    }, unit: {
        type: String,
        enum: ["ml"],
        required: false,
        trim: true,
        default: "ml",
        lowercase: true,
    }, streak: {
        type: Boolean,
        required: true,
        default: false,
    },
});

const CalroiesSchema = new mongoose.Schema({
    completed: {
        type: Number,
        required: true,
    }, remaining: {
        type: Number,
        required: true,
    }, unit: {
        type: String, 
        enum: ["calories"],
        required: false,
        trim: true,
        lowercase: true,
        default: "calories",
    }, streak: {
        type: Boolean,
        required: true,
        default: false,
    },
});

const MoodSchema = new mongoose.Schema({
    value: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        enum: ["angry", "sad", "thoughtful", "soso", "happy", "lovely"],
        default: "happy" 
    }, streak: {
        type: Boolean,
        required: true,
        default: false,
    },
});

const SleepSchema = new mongoose.Schema({
    hours: {
        type: Number,
        required: true,
    }, quality: {
        type: String,
        enum: ['Bad', 'Normal', 'Good'],
        trim: true,
        required: true,
    }, streak: {
        type: Boolean,
        required: true,
        default: false,
    }, 
});

const StressSchema = new mongoose.Schema({
    value: {
        type: Number,
        required: true,
    }, streak: {
        type: Boolean,
        required: true,
        default: false,
    }, 
});


const CardData = mongoose.model('CardData', {
    BMI: {
        type: BMISchema,
        required: true,
    }, Water: {
        type: WaterSchema,
        required: true,
    }, Calories: {
        type: CalroiesSchema,
        required: true,
    }, Mood: {
        type: MoodSchema,
        required: true,
    }, Sleep: {
        type: SleepSchema,
        required: true,
    }, Stress: {
        type: StressSchema,
        required: true,
    }, Sickness: [{
        type: String,
        enum: [
            'Fever or chills',
            'Cough',
            'Difficulty breathing',
            'Fatigue',
            'Muscle or body aches',
            'Headaches',
            'Sore throat',
            'Congestion or runny nose',
            'Nausea or vomiting',
            'Diarrhea',
            'Bluish lips or face',
        ],
        trim: true,
    }], date: {
        type: Date, 
        default: Date.now,
    }   
});

module.exports = { CardData };

