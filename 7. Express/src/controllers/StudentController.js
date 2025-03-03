const { Student, Teacher } = require('../models');

module.exports = {
  async getAllStudents(req, res) {
    try {
      const students = await Student.findAll();
      res.status(200).json(students);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los estudiantes.' });
    }
  },

  async getStudentById(req, res) {
    try {
      const { id } = req.params;
      const student = await Student.findByPk(id);
      if (!student) {
        return res.status(404).json({ error: 'Estudiante no encontrado.' });
      }
      res.status(200).json(student);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el estudiante.' });
    }
  },

  async createStudent(req, res) {
    try {
      const { dni, name, last_name, date_of_birth, teacher_id } = req.body;

      // Validar que el profesor asociado existe
      const teacher = await Teacher.findByPk(teacher_id);
      if (!teacher) {
        return res.status(400).json({ error: 'El profesor asociado no existe.' });
      }

      const student = await Student.create({ dni, name, last_name, date_of_birth, teacher_id });
      res.status(201).json(student);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear el estudiante.' });
    }
  },

  async updateStudent(req, res) {
    try {
      const { id } = req.params;
      const { dni, name, last_name, date_of_birth, teacher_id } = req.body;

      // Validar que el estudiante existe
      const student = await Student.findByPk(id);
      if (!student) {
        return res.status(404).json({ error: 'Estudiante no encontrado.' });
      }

      // Validar que el profesor asociado existe
      const teacher = await Teacher.findByPk(teacher_id);
      if (!teacher) {
        return res.status(400).json({ error: 'El profesor asociado no existe.' });
      }

      await student.update({ dni, name, last_name, date_of_birth, teacher_id });
      res.status(200).json(student);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el estudiante.' });
    }
  },

  async deleteStudent(req, res) {
    try {
      const { id } = req.params;

      // Validar que el estudiante existe
      const student = await Student.findByPk(id);
      if (!student) {
        return res.status(404).json({ error: 'Estudiante no encontrado.' });
      }

      await student.destroy();
      res.status(200).json({ message: 'Estudiante eliminado correctamente.' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el estudiante.' });
    }
  },
};
