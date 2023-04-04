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

  /**
   * @param {storyDto} param dto para payload do story
   * @param {imageDto} param dto do payload da imagem de capa
   */
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

      console.log("THIS >>>>>> ", this.StoryService.storyDTO)
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
        this.StoryService.storyDTO.post_author,
        this.StoryService.storyDTO.post_date,
        this.StoryService.storyDTO.post_date_gmt,
        this.StoryService.storyDTO.post_content,
        this.StoryService.storyDTO.post_title,
        this.StoryService.storyDTO.post_excerpt,
        this.StoryService.storyDTO.post_status,
        this.StoryService.storyDTO.comment_status,
        this.StoryService.storyDTO.ping_status,
        this.StoryService.storyDTO.post_password,
        this.StoryService.storyDTO.post_name,
        this.StoryService.storyDTO.to_ping,
        this.StoryService.storyDTO.pinged,
        this.StoryService.storyDTO.post_modified,
        this.StoryService.storyDTO.post_modified_gmt,
        this.StoryService.storyDTO.post_content_filtered,
        this.StoryService.storyDTO.post_parent,
        this.StoryService.storyDTO.guid,
        this.StoryService.storyDTO.menu_order,
        this.StoryService.storyDTO.post_type,
        this.StoryService.storyDTO.post_mime_type,
        this.StoryService.storyDTO.comment_count,
      ];

      // Executando a instrução SQL
      connection.query(sqlStory, valuesStory, (error, result) => {
        if (error) throw error;

        console.log("[service-create-story] Success: ao inserir story");

        this.StoryService.storyId = result.insertId;

        StoryService.insertImageCover();
      });
    } catch (err) {
      console.error("[service-create-story] Error, storie not created: ", err);
    }
  }

  /**
   * @param {storyId} param id do story inserido
   * @param {imageDto} param dto do payload da imagem de capa
   * @returns {Object} Retorno de um obijeto contendo o id
   */
  static async insertImageCover() {


    console.log("THIS.StoryService >>>>>> ", this.StoryService)
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
        this.StoryService.imageDTO.post_author,
        this.StoryService.imageDTO.post_date,
        this.StoryService.imageDTO.post_date_gmt,
        this.StoryService.imageDTO.post_content,
        this.StoryService.imageDTO.post_title,
        this.StoryService.imageDTO.post_excerpt,
        this.StoryService.imageDTO.post_status,
        this.StoryService.imageDTO.comment_status,
        this.StoryService.imageDTO.ping_status,
        this.StoryService.imageDTO.post_name,
        this.StoryService.imageDTO.post_modified,
        this.StoryService.imageDTO.post_modified_gmt,
        this.StoryService.imageDTO.post_parent,
        this.StoryService.imageDTO.guid,
        this.StoryService.imageDTO.post_type,
        this.StoryService.imageDTO.post_mime_type,
      ];

      // Executando a instrução SQL
      connection.query(sqlImage, valuesImage, (error, result) => {
        if (error) throw error;

        this.StoryService.imageId = result.insertId;

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


    console.log("THIS.StoryService >>>>>> ", this.StoryService)
    const sqlRelationship = `INSERT INTO dQMf2A_postmeta (
      post_id, meta_key, meta_value
      ) VALUES (?, ?, ?)`;
    const valuesRelationship = [this.StoryService.storyId, "_thumbnail_id", this.StoryService.imageId];

    // Executando a instrução SQL
    connection.query(sqlRelationship, valuesRelationship, (error, result) => {
      if (error) throw error;

      console.log("Relacionamento feito com sucesso: ", result);

      StoryService.createTaxonomy();
    });
  }

  static async createTaxonomy() {

    console.log("THIS.StoryService >>>>>> ", this.StoryService)
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

    console.log("THIS >>>>>> ", this.StoryService)
    const sqlTaxonomy = `INSERT INTO dQMf2A_term_relationships (
      object_id, term_taxonomy_id, term_order
      ) VALUES (?, ?, ?)`;
    const valuesTaxonomy = [this.StoryService.storyId, 10, 0];

    // Executando a instrução SQL
    connection.query(sqlTaxonomy, valuesTaxonomy, (error, result) => {
      if (error) throw error;

      this.StoryService.taxonomyId = result.insertId;
    });
  }
}

module.exports = StoryService;
