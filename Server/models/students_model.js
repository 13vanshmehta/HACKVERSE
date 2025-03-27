const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    RollNo: {
        type: String,
        required: true
    },
    MotherName: {
        type: String,
        required: true
    },
    FatherName: {
        type: String,
        required: true
    },
    Email: [{
        type: String,
        required: true
    }],
    PhoneNumber: [{
        type: Number,
        required: true
    }],
    Class: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Class'
    }
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;