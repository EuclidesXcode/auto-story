const StorieDTO = require("../dto/storie-dto");
const ImageDTO = require("../dto/image-dto");
const StorieService = require("../service/storie-service");
const GPTService = require("../service/gpt-service");
const GoogleService = require("../service/google-search");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "107.190.131.154",
  user: "eucode",
  password: "@cod3R00t",
  database: "wp_off1i",
});

module.exports = class StorieController {
  /**
   * @param {params} param payload do post editado para a criação do story
   */
  static async createStory(params) {
    try {
      const timestamp = new Date().getTime(); // timestamp atual
      const dateObj = new Date(timestamp); // objeto Date a partir do timestamp
      const year = dateObj.getFullYear();
      const month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
      const day = ("0" + dateObj.getDate()).slice(-2);
      const hours = ("0" + dateObj.getHours()).slice(-2);
      const minutes = ("0" + dateObj.getMinutes()).slice(-2);
      const seconds = ("0" + dateObj.getSeconds()).slice(-2);

      const normalized = params.title
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      const replaced = normalized.replace(/[^a-zA-Z0-9]+/g, "-").toLowerCase();

      const slug = replaced.replace(/^-+|-+$/g, "");

      const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

      const contentStory = await GPTService.generateContentStory(params.title);
      // const tags = await GPTService.generateTags(params.title);

      const imageFind = await GoogleService.getImageByTitle(params.title)

      const contentArrayByChatGPT =
        contentStory.choices[0].message.content.split("\n");

      const storieDTO = new StorieDTO(
        params,
        formattedDate,
        contentArrayByChatGPT,
        slug,
        imageFind
      );

      const imageDTO = new ImageDTO(params, formattedDate, slug, imageFind);

      const result = await StorieService.createStory(storieDTO, imageDTO);

      connection.end();

      return result;
    } catch (err) {
      console.error("[story-controller-create-story] Error: ", err);
    }
  }
};
