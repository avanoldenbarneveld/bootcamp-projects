const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');

// Ruta para generar token
router.post('/token', AuthController.generateToken);

module.exports = router;
