const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const StorieController = require("./controller/storie-controller");
const connection = require("./config/db-connect")

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

// db test
app.post('/story/insert', (req, res) => {
    const { 
        post_author,
        post_date,
        post_date_gmt,
        post_content,
        post_title,
        post_excerpt,
        post_status,
        comment_status,
        ping_status,
        post_password,
        post_name,
        to_ping,
        pinged,
        post_modified,
        post_modified_gmt,
        post_content_filtered,
        post_parent,
        guid,
        menu_order,
        post_type,
        post_mime_type,
        comment_count
     } = req.body;

     console.log("o que eu recebi: ", req.body)
  
    // Criando uma instrução SQL para inserir dados na tabela
    const sql = `INSERT INTO 1Yx5s_posts (
        post_author,
        post_date,
        post_date_gmt,
        post_content,
        post_title,
        post_excerpt,
        post_status,
        comment_status,
        ping_status,
        post_password,
        post_name,
        to_ping,
        pinged,
        post_modified,
        post_modified_gmt,
        post_content_filtered,
        post_parent,
        guid,
        menu_order,
        post_type,
        post_mime_type,
        comment_count) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [
        post_author,
        post_date,
        post_date_gmt,
        post_content,
        post_title,
        post_excerpt,
        post_status,
        comment_status,
        ping_status,
        post_password,
        post_name,
        to_ping,
        pinged,
        post_modified,
        post_modified_gmt,
        post_content_filtered,
        post_parent,
        guid,
        menu_order,
        post_type,
        post_mime_type,
        comment_count];
  
    // Executando a instrução SQL
    connection.query(sql, values, (error, result) => {
      if (error) throw error;
      console.log('Dados inseridos com sucesso!');
      res.send('Dados inseridos com sucesso!');
    });
  });

// Iniciar o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
