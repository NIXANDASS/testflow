const mongoose = require('mongoose')

const resultSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    test: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tests'
    },
    score: Number,
    answers: [
        {
            questionId: mongoose.Schema.Types.ObjectId,
            givenAnswer: String,
            isCorrect: Boolean,
        }
    ]
})

module.exports = mongoose.model('Results', resultSchema)