const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const StorieController = require("./controller/storie-controller");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Rotas
app.post("/story", async (req, res) => {
    const result = await StorieController.validate(req?.body);

  console.log("req.body: ", result);
  res.send("Olá, mundo!: ");
});

// Iniciar o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
