const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    Grade: {
        type: String,
        required: true
    },
    Div: {
        type: String,
        required: true
    },
    Year: {
        type: Number,
        required: true
    },
    ClassTeacher: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Teacher'
    }
});

const Class = new mongoose.model('Class', classSchema);
module.exports = Class;