const mongoose = require("mongoose");

const periodSchema = new mongoose.Schema({
    
    Start: {
        type: String,
        required: true
    },
    End: {
        type: String,
        required: true
    },
    Subject: {
        type: String,
        required: true
    },
    Teacher: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Teacher'
    },
    Message: {
        type: String,
        required: false
    },
    Details: {
        type: String,
        required: false
    },
    StudyMaterial: {
        type: String, //Link to GDrive
        required: false
    }
}, {timestamps: true});

const Period = new mongoose.model('Period', periodSchema);
module.exports = Period;