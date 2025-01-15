const express = require('express');
const app = express();

app.get('/book/:id', (req, res) => {
  console.log('Hostname:', req.hostname); // Nombre del host
  console.log('IP:', req.ip);             // IP del cliente
  console.log('Params:', req.params);     // Parámetros dinámicos de la ruta
  console.log('Route:', req.route);       // Información sobre la ruta coincidente

  res.json({
    hostname: req.hostname,
    ip: req.ip,
    params: req.params,
    route: req.route
  });
});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en http://localhost:3000');
});
