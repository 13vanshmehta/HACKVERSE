const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// Connection to DB
const connectDB = require('./utilities/connection');
const PORT= process.env.PORT || 3000
const app = express();

// Inbuilt Middlewares
// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // still keep this for JSON requests
// Middlewares 

// Routes
const teacherRoutes = require('./routers/teacher_router');
app.use('/api/teachers', teacherRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectDB();
});

module.exports = app;