const express = require('express');
const router = express.Router();
const { User } = require('../models');
const UserController = require('../controllers/UserController');

// Middleware para proteger rutas (solo admin)
function isAdmin(req, res, next) {
  if (!req.session.userId || req.session.userData?.type !== 'admin') {
    return res.status(401).json({ error: 'No autorizado' });
  }
  next();
}

// Ruta para obtener todos los usuarios (solo para admin)
router.get('/', isAdmin, async (req, res) => {
    try {
        const users = await User.findAll();
        res.render('users', { users }); // Renderiza la vista users.mustache
    } catch (error) {
        res.status(500).send('Error al obtener usuarios.');
    }
});



// Rutas anteriores para el manejo de usuarios
router.get('/', UserController.getAllUsers); // Listado de usuarios
router.get('/:id', UserController.getUserById); // Obtener usuario por ID
router.post('/', UserController.createUser); // Crear un nuevo usuario
router.put('/:id', UserController.updateUser); // Actualizar un usuario
router.delete('/:id', UserController.deleteUser); // Eliminar un usuario

// Endpoints para activar usuarios
router.post('/:id/active', UserController.setUserActive);
router.get('/:id/active', UserController.getUserActive);

// Endpoint para logout
router.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: 'Error al cerrar sesión.' });
    }
    res.redirect('/login');
  });
});

module.exports = router;
