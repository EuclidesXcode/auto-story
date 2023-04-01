const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const StorieController = require("./controller/storie-controller");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "107.190.131.154",
  user: "eucode",
  password: "@cod3R00t",
  database: "wp_nhczh",
});

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// create story
app.post("/story/insert", async (req, res) => {
  const result = await StorieController.createStory(req.body);

  console.log("Resultado GERAL: ", result);

  if (result && result !== undefined) {
    connection.end();
    res.status("Dados inseridos com sucesso!: ").send(result);
  } else {
    connection.end();
    res.status("Dados não inseridos!: ").send(result);
  }
});

// process.on("uncaughtException", function (err) {
//   console.error("Erro não tratado:", err.stack);
// });

// Iniciar o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
