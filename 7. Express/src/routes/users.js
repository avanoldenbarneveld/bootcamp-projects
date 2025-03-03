const express = require('express');
const router = express.Router();
const { User } = require('../models');
const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.SECRET_KEY || 'yourSecretKey'; // Usa una clave segura

// Middleware para proteger rutas con JWT (solo admin)
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No autorizado' });

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ error: 'Token inválido' });
    req.user = user; // Almacenar datos del token en req.user
    if (req.user.type !== 'admin') {
      return res.status(403).json({ error: 'No autorizado para esta operación.' });
    }
    next();
  });
}

// Ruta para obtener todos los usuarios (solo para admin)
router.get('/', authenticateToken, async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users); // Devolver JSON
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios.', details: error.message });
  }
});

// Obtener un usuario por ID
router.get('/:id', authenticateToken, async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado.' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el usuario.', details: error.message });
  }
});

// Crear un nuevo usuario
router.post('/', async (req, res) => {
  try {
    const { email, password, type, active } = req.body;

    // Validar campos requeridos
    if (!email || !password || !type) {
      return res.status(400).json({ error: 'Faltan datos requeridos' });
    }

    // Verificar si el email ya está registrado
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'El email ya está registrado.' });
    }

    // Crear el usuario
    const user = await User.create({ email, password, type, active });
    res.status(201).json(user);
  } catch (error) {
    // Manejar errores de validación de Sequelize
    if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({ error: 'Error de validación.', details: error.errors.map(e => e.message) });
    }

    // Manejar errores no previstos
    res.status(500).json({ error: 'Error al crear el usuario.', details: error.message });
  }
});

// Activar un usuario
router.post('/:id/active', authenticateToken, async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado.' });
    user.active = true;
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error al activar el usuario.', details: error.message });
  }
});

// Verificar si un usuario está activo
router.get('/:id/active', authenticateToken, async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, { attributes: ['active'] });
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado.' });
    res.json({ active: user.active });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el estado del usuario.', details: error.message });
  }
});

router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const { email, type } = req.body;
    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado.' });
    }

    user.email = email || user.email;
    user.type = type || user.type;
    await user.save();

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el usuario.', details: error.message });
  }
});


module.exports = router;
