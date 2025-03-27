const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacher_controller');

// Create a new teacher
router.post('/create', teacherController.createTeacher);

// Get all teachers
router.get('/get', teacherController.getAllTeachers);

// Get teacher by ID
router.get('/get/:id', teacherController.getTeacherById);

// Get teacher by name
router.get('/getByName/:name', teacherController.getTeacherByName);

// Update a teacher
router.put('/update/:id', teacherController.updateTeacher);

// Delete a teacher
router.delete('/delete/:id', teacherController.deleteTeacher);

module.exports = router;