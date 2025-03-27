const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    period: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Period'
    },
    student: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Student' 
    },
    remark: {
        type: String,
        default: ''
    },
    isPresent: {
        type: Boolean,
        required: true
    },
    image: [{
        type: String,
        required: true
    }]
});

const Attendance = mongoose.model("Attendance", attendanceSchema);
module.exports = Attendance;