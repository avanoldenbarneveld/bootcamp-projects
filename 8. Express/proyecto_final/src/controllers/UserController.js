const { User, Teacher } = require('../models');

module.exports = {
  async getAllUsers(req, res) {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
  },

  async getUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el usuario' });
    }
  },

  async createUser(req, res) {
    try {
      const { email, password, type, active } = req.body;
      const user = await User.create({ email, password, type, active });
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear el usuario' });
    }
  },

  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { email, password, type, active } = req.body;
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
      await user.update({ email, password, type, active });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
  },

  async deleteUser(req, res) {
    try {
      const { id } = req.params;
  
      const teacher = await Teacher.findOne({ where: { user_id: id } });
      if (teacher) {
        return res.status(400).json({ error: 'No se puede eliminar un usuario con un profesor asociado.' });
      }
  
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado.' });
      }
  
      await user.destroy();
      return res.status(200).json({ message: 'Usuario eliminado correctamente.' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el usuario.', details: error.message });
    }
  },

  async setUserActive(req, res) {
    try {
      const { id } = req.params;

      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado.' });
      }

       await user.update({ active: true });
      return res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el estado del usuario.', details: error.message });
    }
  },

  async getUserActive(req, res) {
    try {
      const { id } = req.params;

      const user = await User.findByPk(id, {
        attributes: ['active'],
      });
      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado.' });
      }

      return res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el estado activo del usuario.', details: error.message });
    }
  },
};