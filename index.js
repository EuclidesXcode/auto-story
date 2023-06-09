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
  const result = await StorieController.createStory(req.body);

  console.log("Resultado GERAL: ", result);
  
  if (result && result !== undefined) {
    res.status("Dados inseridos com sucesso!: ").send(result);
  } else {
    res.status("Dados não inseridos!: ").send(result);
  }
});

process.on("uncaughtException", function (err) {
  console.error("Generic error: ", err.stack);
});

// Iniciar o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
