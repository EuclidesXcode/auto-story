const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process_env.DB_PASS,
  database: process.env.DB_NAME,
});

class StoryService {

  static async createStory(storyDto) {
    try {
      if (connection.state === "disconnected") {
        connection.connect((err) => {
          if (err) {
            console.error(
              "[service-create-story] Error: database connection error ",
              err
            );
            return;
          }

          console.log("[service-create-story] Success: database connected");
        });
      }

      // Inserindo o storu
      const sqlStory = `INSERT INTO ${process.env.DB_PREFIX}posts (
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
      connection.query(sqlStory, valuesStory, (error, result) => {
        if (error) throw error;

        console.log("[service-create-story] Success: ao inserir story");

        const storyId = result.insertId;

        return storyId;
      });
    } catch (err) {
      console.error("[service-create-story] Error, storie not created: ", err);
    }
  }

  static async insertImageCover(imageDTO) {

    console.log("IMAGE DTO:", imageDTO.post_author)

    try {
      // Inserindo a imagem de capa
      const sqlImage = `INSERT INTO ${process.env.DB_PREFIX}posts (
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
        imageDTO.post_author,
        imageDTO.post_date,
        imageDTO.post_date_gmt,
        imageDTO.post_content,
        imageDTO.post_title,
        imageDTO.post_excerpt,
        imageDTO.post_status,
        imageDTO.comment_status,
        imageDTO.ping_status,
        imageDTO.post_name,
        imageDTO.post_modified,
        imageDTO.post_modified_gmt,
        imageDTO.post_parent,
        imageDTO.guid,
        imageDTO.post_type,
        imageDTO.post_mime_type,
      ];

      // Executando a instrução SQL
      connection.query(sqlImage, valuesImage, (error, result) => {
        if (error) throw error;

        const imageId = result.insertId;

        return imageId;
      });
    } catch (err) {
      console.error(
        "[service-insert-image-cover]Error on isert image cover: ",
        err
      );
    }
  }

  static async relateImageToStory(storyId, imageId) {
    const sqlRelationship = `INSERT INTO ${process.env.DB_PREFIX}postmeta (
      post_id, meta_key, meta_value
      ) VALUES (?, ?, ?)`;
    const valuesRelationship = [storyId, "_thumbnail_id", imageId];

    // Executando a instrução SQL
    connection.query(sqlRelationship, valuesRelationship, (error, result) => {
      if (error) throw error;

      console.log("Relacionamento feito com sucesso: ", result);

      StoryService.createTaxonomy();
    });
  }

  static async createTaxonomy(storyId, imageId) {
    const sqlTaxonomy = `INSERT INTO ${process.env.DB_PREFIX}terms (
      name, slug, term_group
      ) VALUES (?, ?, ?)`;
    const valuesTaxonomy = ["teste de categoria", "teste-de-categoria", 0];

    // Executando a instrução SQL
    connection.query(sqlTaxonomy, valuesTaxonomy, (error, result) => {
      if (error) throw error;

      const taxonomyId = result.insertId;

      return taxonomyId;
    });
  }

  static async createRelationshipToTaxonomy(storyId, taxonomyId) {
    const sqlTaxonomy = `INSERT INTO ${process.env.DB_PREFIX}term_relationships (
      object_id, term_taxonomy_id, term_order
      ) VALUES (?, ?, ?)`;
    const valuesTaxonomy = [storyId, 10, 0];

    // Executando a instrução SQL
    connection.query(sqlTaxonomy, valuesTaxonomy, (error, result) => {
      if (error) throw error;

      const taxonomyRelationId = result.insertId;

      return taxonomyRelationId
    });
  }
}

module.exports = StoryService;
