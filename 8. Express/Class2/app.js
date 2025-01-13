const express = require("express");
const app = express();
const port = 3000;

// Ejercicio 3: Importar el router para las rutas de book
const bookRouter = require("./bookRouter");

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: false }));

// Ejercicio 1

app.post("/user", (req, res) => {
  if (typeof req.body === "string") {
    res.send(req.body);
  } else if (req.body?.title) {
    res.send(req.body.title);
  } else {
    res.end();
  }
});

// Ejercicio 2

app.get('/student/:id', (req, res, next) => {
  if (req.params.id > 99) {
    return next(new Error('El ID no puede ser mayor que 99'));
  }
  res.end();
});

app.use((err, req, res, next) => {
  res.status(400).send(err.message);
});

// Ejercicio 3: Usar el router para las rutas /book
app.use("/book", bookRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
