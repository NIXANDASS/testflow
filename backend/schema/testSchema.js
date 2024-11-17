const mongoose = require('mongoose');

const testSchame = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    questions: [
        {
            questionText: {
                type: String,
                required: true
            },
            type: {
                type: String,
                enum: ['MCQ', 'Subjective', 'Coding'],
                required: true
            },
            options: [String],
            correctAnswer: String,
            points: Number,
        }
    ],
    scheduleAt: Date,
    duration: Number
})

module.exports = mongoose.model('Tests', testSchame)