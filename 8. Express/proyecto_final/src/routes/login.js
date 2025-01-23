const express = require('express');
const path = require('path');
const { User } = require('../models'); // Eliminado bcrypt temporalmente
const router = express.Router();

// GET /login - Renderiza la página de login
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/login.html'));
});

// GET /home - Verifica si el usuario está logueado
router.get('/home', (req, res) => {
    if (!req.session.userId) {
        return res.redirect('/login');
    }
    res.sendFile(path.join(__dirname, '../views/home.html'));
});

// POST /login - Maneja el inicio de sesión
router.post('/', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Busca al usuario por email
        const user = await User.findOne({ where: { email: username } });

        if (!user) {
            return res.status(401).sendFile(path.join(__dirname, '../views/error-login.html'));
        }

        // Comparación directa de contraseñas (temporal)
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ where: { email: username } });

        if (!user) {
            return res.status(401).sendFile(path.join(__dirname, '../views/error-login.html'));
        }

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.status(401).sendFile(path.join(__dirname, '../views/error-login.html'));
        }

        req.session.userId = user.id;
        req.session.userData = { email: user.email, type: user.type };

        res.redirect('/home');
    } catch (error) {
        res.status(500).json({ error: 'Error en el proceso de login.', details: error.message });
    }
});


        // Guardar datos del usuario en la sesión
        req.session.userId = user.id;
        req.session.userData = { email: user.email, type: user.type };

        // Redirigir al home
        res.redirect('/home');
    } catch (error) {
        res.status(500).json({ error: 'Error en el proceso de login.', details: error.message });
    }
});

router.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send('Error al cerrar sesión.');
        }
        res.redirect('/login');
    });
});


module.exports = router;
