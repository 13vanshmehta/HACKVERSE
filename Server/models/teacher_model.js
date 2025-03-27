const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    PhoneNumber: {
        type: Number,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Roles: [{
        type: String,
        enum: ['Principle', 'Vice-Principle', 'Coordinator', 'Class-Teacher', 'Subject-Teacher'],
        required: true
    }]
}, {timestamps: true});

const Teacher=new mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;