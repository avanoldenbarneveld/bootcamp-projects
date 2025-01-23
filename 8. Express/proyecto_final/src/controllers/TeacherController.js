const { Teacher, Student, User } = require('../models');

module.exports = {
  async getAllTeachers(req, res) {
    try {
      const teachers = await Teacher.findAll();
      res.status(200).json(teachers);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los profesores' });
    }
  },

  async getTeacherById(req, res) {
    try {
      const { id } = req.params;
      const teacher = await Teacher.findByPk(id);
      if (!teacher) {
        return res.status(404).json({ error: 'Profesor no encontrado' });
      }
      res.status(200).json(teacher);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el profesor' });
    }
  },

  async createTeacher(req, res) {
    try {
      const { dni, name, last_name, date_of_birth, user_id } = req.body;
      const teacher = await Teacher.create({ dni, name, last_name, date_of_birth, user_id });
      res.status(201).json(teacher);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear el profesor' });
    }
  },

  async updateTeacher(req, res) {
    try {
      const { id } = req.params;
      const { dni, name, last_name, date_of_birth, user_id } = req.body;
      const teacher = await Teacher.findByPk(id);
      if (!teacher) {
        return res.status(404).json({ error: 'Profesor no encontrado' });
      }
      await teacher.update({ dni, name, last_name, date_of_birth, user_id });
      res.status(200).json(teacher);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el profesor' });
    }
  },

  async deleteTeacher(req, res) {
    try {
      const { id } = req.params;

      const students = await Student.findOne({ where: { teacher_id: id } });
      if (students) {
        return res.status(400).json({ error: 'No se puede eliminar un profesor con estudiantes asociados.' });
      }

      const teacher = await Teacher.findByPk(id);
      if (!teacher) {
        return res.status(404).json({ error: 'Profesor no encontrado.' });
      }

      await teacher.destroy();
      return res.status(200).json({ message: 'Profesor eliminado correctamente.' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el profesor.', details: error.message });
    }
  },

  async getTeacherStudents(req, res) {
    try {
      const { teacher_id } = req.params;
  
      const teacher = await Teacher.findByPk(teacher_id, {
        include: [{ model: User, as: 'user' }],
      });
  
      if (!teacher) {
        return res.status(404).json({ error: 'Profesor no encontrado.' });
      }
  
      if (!teacher.user.active) {
        return res.status(401).json({ error: 'El usuario asociado al profesor no está activo.' });
      }
  
      const students = await Student.findAll({
        where: { teacher_id },
        order: [['date_of_birth', 'ASC']],
      });
  
      return res.status(200).json(students);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los estudiantes.', details: error.message });
    }
  },
};
