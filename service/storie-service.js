const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "107.190.131.154",
  user: "eucode",
  password: "@cod3R00t",
  database: "wp_off1i",
});

class StoryService {
  constructor(storyDto, imageDto) {
    this.storyDTO = storyDto;
    this.imageDTO = imageDto;
    this.storyId = null;
    this.imageId = null;
    this.taxonomyId = null;
  }

  static async createStory() {
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

      console.log("como esta o THIS >>>>>>>>>>> ", this.storyDTO.post_author)

      // Inserindo o storu
      const sqlStory = `INSERT INTO dQMf2A_posts (
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
        this.storyDTO.post_author,
        this.storyDTO.post_date,
        this.storyDTO.post_date_gmt,
        this.storyDTO.post_content,
        this.storyDTO.post_title,
        this.storyDTO.post_excerpt,
        this.storyDTO.post_status,
        this.storyDTO.comment_status,
        this.storyDTO.ping_status,
        this.storyDTO.post_password,
        this.storyDTO.post_name,
        this.storyDTO.to_ping,
        this.storyDTO.pinged,
        this.storyDTO.post_modified,
        this.storyDTO.post_modified_gmt,
        this.storyDTO.post_content_filtered,
        this.storyDTO.post_parent,
        this.storyDTO.guid,
        this.storyDTO.menu_order,
        this.storyDTO.post_type,
        this.storyDTO.post_mime_type,
        this.storyDTO.comment_count,
      ];

      // Executando a instrução SQL
      connection.query(sqlStory, valuesStory, (error, result) => {
        if (error) throw error;

        console.log("[service-create-story] Success: ao inserir story");

        this.storyId = result.insertId;

        StoryService.insertImageCover();
      });
    } catch (err) {
      console.error("[service-create-story] Error, storie not created: ", err);
    }
  }

  static async insertImageCover() {
    try {
      // Inserindo a imagem de capa
      const sqlImage = `INSERT INTO dQMf2A_posts (
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
        this.imageDTO.post_author,
        this.imageDTO.post_date,
        this.imageDTO.post_date_gmt,
        this.imageDTO.post_content,
        this.imageDTO.post_title,
        this.imageDTO.post_excerpt,
        this.imageDTO.post_status,
        this.imageDTO.comment_status,
        this.imageDTO.ping_status,
        this.imageDTO.post_name,
        this.imageDTO.post_modified,
        this.imageDTO.post_modified_gmt,
        this.imageDTO.post_parent,
        this.imageDTO.guid,
        this.imageDTO.post_type,
        this.imageDTO.post_mime_type,
      ];

      // Executando a instrução SQL
      connection.query(sqlImage, valuesImage, (error, result) => {
        if (error) throw error;

        this.imageId = result.insertId;

        StoryService.relateImageToStory();
      });
    } catch (err) {
      console.error(
        "[service-insert-image-cover]Error on isert image cover: ",
        err
      );
    }
  }

  static async relateImageToStory() {
    const sqlRelationship = `INSERT INTO dQMf2A_postmeta (
      post_id, meta_key, meta_value
      ) VALUES (?, ?, ?)`;
    const valuesRelationship = [this.storyId, "_thumbnail_id", this.imageId];

    // Executando a instrução SQL
    connection.query(sqlRelationship, valuesRelationship, (error, result) => {
      if (error) throw error;

      console.log("Relacionamento feito com sucesso: ", result);

      StoryService.createTaxonomy();
    });
  }

  static async createTaxonomy() {
    const sqlTaxonomy = `INSERT INTO dQMf2A_terms (
      name, slug, term_group
      ) VALUES (?, ?, ?)`;
    const valuesTaxonomy = ["teste de categoria", "teste-de-categoria", 0];

    // Executando a instrução SQL
    connection.query(sqlTaxonomy, valuesTaxonomy, (error, result) => {
      if (error) throw error;

      this.taxonomyId = result.insertId;

      StoryService.createRelationshipToTaxonomy();
    });
  }

  static async createRelationshipToTaxonomy() {
    const sqlTaxonomy = `INSERT INTO dQMf2A_term_relationships (
      object_id, term_taxonomy_id, term_order
      ) VALUES (?, ?, ?)`;
    const valuesTaxonomy = [this.storyId, 10, 0];

    // Executando a instrução SQL
    connection.query(sqlTaxonomy, valuesTaxonomy, (error, result) => {
      if (error) throw error;

      this.taxonomyId = result.insertId;
    });
  }
}

module.exports = StoryService;
