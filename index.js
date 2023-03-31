const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const StorieController = require("./controller/storie-controller");
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// create story
app.post("/story/insert", async (req, res) => {
  await StorieController.validade(req.body);

  res.send("Dados inseridos com sucesso!");
});

// add a listener for the 'error' event
myEmitter.on('error', (err) => {
  console.error('Error occurred:', err);
});

// Iniciar o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

