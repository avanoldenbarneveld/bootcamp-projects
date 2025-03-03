const express = require('express');
const router = express.Router();
const StudentController = require('../controllers/StudentController');

// Rutas para estudiantes
router.get('/', StudentController.getAllStudents);
router.get('/:id', StudentController.getStudentById);
router.post('/', StudentController.createStudent);
router.put('/:id', StudentController.updateStudent);
router.delete('/:id', StudentController.deleteStudent);

module.exports = router;
