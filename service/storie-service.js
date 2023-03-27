const connection = require("../config/db-connect");

class StorieService {
  static async createStorie(dto) {
    console.log("Entrou no Service com o dto: ", dto);

    try {
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
        dto.post_author,
        dto.post_date,
        dto.post_date_gmt,
        dto.post_content,
        dto.post_title,
        dto.post_excerpt,
        dto.post_status,
        dto.comment_status,
        dto.ping_status,
        dto.post_password,
        dto.post_name,
        dto.to_ping,
        dto.pinged,
        dto.post_modified,
        dto.post_modified_gmt,
        dto.post_content_filtered,
        dto.post_parent,
        dto.guid,
        dto.menu_order,
        dto.post_type,
        dto.post_mime_type,
        dto.comment_count,
      ];

      // Executando a instrução SQL
      connection.query(sql, values, (error, result) => {
        if (error) throw error;
        return result
      });
    } catch (err) {
      console.error("Error, storie not created: ", err);
    }
  }
}

module.exports = StorieService;
