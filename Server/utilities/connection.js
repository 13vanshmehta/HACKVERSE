const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

const connection = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connection to Database Established Successfully!");
    } catch (error) {
        console.error('Connection to Database Failed!');
        console.log('Error: ', error);
        process.exit(1);
    }
}

module.exports = connection;