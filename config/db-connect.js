const mysql = require("mysql2");

// Criando a conexão com o banco de dados
class ConnectionToDatabase {
  static conectionMysql() {
    try {
      mysql.createConnection({
        host: "107.190.131.154",
        user: "eucode",
        password: "@cod3R00t",
        database: "wp_nhczh",
      });
    } catch (err) {
      console.error("Error on connect to database: ", err);
    }
  }
}

module.exports = ConnectionToDatabase;
