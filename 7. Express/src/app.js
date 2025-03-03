const express = require("express");
const session = require("express-session");
const path = require("path");
const dotenv = require("dotenv");
const mustacheExpress = require("mustache-express");

// Configurar dotenv para leer variables de entorno
dotenv.config();

const usersRoutes = require("./routes/users");
const teachersRoutes = require("./routes/teachers");
const studentsRoutes = require("./routes/students");
const loginRoutes = require("./routes/login");
const authRoutes = require("./routes/auth");

const app = express();

// Configurar middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de sesiones
app.use(
  session({
    secret: process.env.SECRET_KEY || "yourSecretKey",
    resave: false,
    saveUninitialized: true,
  })
);

// Configuración de mustache
app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", path.join(__dirname, "views"));

// Registrar rutas
app.use("/api/users", usersRoutes);
app.use("/api/teachers", teachersRoutes);
app.use("/api/students", studentsRoutes);
app.use("/login", loginRoutes);
app.use("/api", authRoutes);

// Ruta para la página de inicio
app.get("/home", (req, res) => {
  if (!req.session.userId) {
    return res.redirect("/login");
  }
  res.sendFile(path.join(__dirname, "views/home.html")); // Usa sendFile para la vista home.html
});

// Puerto y arranque del servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

module.exports = app;
