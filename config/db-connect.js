const mysql = require('mysql2');

// Criando a conexão com o banco de dados
const connection = mysql.createConnection({
  host: '107.190.131.154',
  user: 'eucode',
  password: '@cod3R00t',
  database: 'wp_nhczh'
});

module.exports = connection
