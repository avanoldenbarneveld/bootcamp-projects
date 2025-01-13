const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Solicitud con método GET");
});

router.post("/", (req, res) => {
  res.send("Solicitud con método POST");
});

router.put("/:id", (req, res) => {
  res.send(`Solicitud con método PUT para el libro con ID ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
  res.send(`Solicitud con método DELETE para el libro con ID ${req.params.id}`);
});

module.exports = router;