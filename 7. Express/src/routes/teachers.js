const express = require('express');
const router = express.Router();
const TeacherController = require('../controllers/TeacherController');

router.get('/', TeacherController.getAllTeachers);

router.get('/:id', TeacherController.getTeacherById);

router.get('/:teacher_id/students', TeacherController.getTeacherStudents);

router.post('/', TeacherController.createTeacher);

router.put('/:id', TeacherController.updateTeacher);

router.delete('/:id', TeacherController.deleteTeacher);

module.exports = router;
