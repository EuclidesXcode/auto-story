const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const StorieController = require("./controller/storie-controller");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// create story
app.post("/story/insert", async (req, res) => {
  await StorieController.validade(req.body);

  res.send("Dados inseridos com sucesso!");
});

process.on('uncaughtException', function (err) {
  console.error('Erro não tratado:', err.stack);
});

// Iniciar o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

