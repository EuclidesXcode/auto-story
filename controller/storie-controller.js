const StorieDTO = require("../dto/storie-dto");
const ImageDTO = require("../dto/image-dto");
const StorieService = require("../service/storie-service");
const GPTService = require("../service/gpt-service");

module.exports = class StorieController {
  static async validade(params) {
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
      const tags = await GPTService.generateTags(params.title);

      const urlImage = "https://static.poder360.com.br/2021/10/bolsafamilia-848x477.jpg"

      console.log("TAGS GERADAS PELO GPT: ", tags)

      const contentArrayByChatGPT =
      contentStory.choices[0].message.content.split("\n");

      const storieDTO = new StorieDTO(
        params,
        formattedDate,
        contentArrayByChatGPT,
        slug
      );

      const imageDTO = new ImageDTO(params, formattedDate, slug, urlImage)

      const result = await StorieService.createStorie(storieDTO, imageDTO);

      return result;
    } catch (err) {
      console.error("Controller Error: ", err);
    }
  }
};
