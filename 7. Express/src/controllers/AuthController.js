const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('../models');

const SECRET_KEY = process.env.SECRET_KEY || 'yourSecretKey'; // Usa una clave segura

module.exports = {
  async generateToken(req, res) {
    const { username, password } = req.body;

    try {
      // Buscar el usuario por email
      const user = await User.findOne({ where: { email: username } });
      if (!user) {
        return res.status(401).json({ error: 'Usuario no encontrado.' });
      }

      // Validar la contraseña
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Credenciales inválidas.' });
      }

      // Generar el token JWT
      const token = jwt.sign(
        { id: user.id, email: user.email, type: user.type }, // Payload
        SECRET_KEY,                                         // Clave secreta
        { expiresIn: '15m' }                                // Tiempo de expiración
      );

      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ error: 'Error al generar el token.', details: error.message });
    }
  },
};
