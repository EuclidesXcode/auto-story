const connection = require("../config/db-connect");

class StorieService {
  static async createStorie(storyDto, imageDto) {
    try {
      // Inserindo o storu
      const sqlStory = `INSERT INTO 1Yx5s_posts (
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
      const valuesStory = [
        storyDto.post_author,
        storyDto.post_date,
        storyDto.post_date_gmt,
        storyDto.post_content,
        storyDto.post_title,
        storyDto.post_excerpt,
        storyDto.post_status,
        storyDto.comment_status,
        storyDto.ping_status,
        storyDto.post_password,
        storyDto.post_name,
        storyDto.to_ping,
        storyDto.pinged,
        storyDto.post_modified,
        storyDto.post_modified_gmt,
        storyDto.post_content_filtered,
        storyDto.post_parent,
        storyDto.guid,
        storyDto.menu_order,
        storyDto.post_type,
        storyDto.post_mime_type,
        storyDto.comment_count,
      ];

      // Executando a instrução SQL
      await connection.query(sqlStory, valuesStory, (error, result) => {
        if (error) throw error;

        console.log("RESULT DO STORY: ", result);

        const insertImage = StorieService.insertImageCover(
          result.insertId,
          imageDto
        );

        console.log("INSERIU A IMAGEM: ", insertImage);
      });
    } catch (err) {
      console.error("Error, storie not created: ", err);
    }
  }

  static async insertImageCover(storyId, imageDto) {
    console.log("ID DO STORY: ", storyId);

    try {
      // Inserindo a imagem de capa
      const sqlImage = `INSERT INTO 1Yx5s_posts (
        post_author,
        post_date,
        post_date_gmt,
        post_content,
        post_title,
        post_excerpt,
        post_status,
        comment_status,
        ping_status,
        post_name,
        post_modified,
        post_modified_gmt,
        post_parent,
        guid,
        post_type,
        post_mime_type) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
      const valuesImage = [
        imageDto.post_author,
        imageDto.post_date,
        imageDto.post_date_gmt,
        imageDto.post_content,
        imageDto.post_title,
        imageDto.post_excerpt,
        imageDto.post_status,
        imageDto.comment_status,
        imageDto.ping_status,
        imageDto.post_name,
        imageDto.post_modified,
        imageDto.post_modified_gmt,
        imageDto.post_parent,
        imageDto.guid,
        imageDto.post_type,
        imageDto.post_mime_type,
      ];

      // Executando a instrução SQL
      await connection.query(sqlImage, valuesImage, (error, result) => {
        if (error) throw error;

        console.log("RESULT DA IMAGEM: ", result);

        return result;
      });
    } catch (err) {
      console.error("Error on isert image cover: ", err);
    }
  }
}

module.exports = StorieService;
