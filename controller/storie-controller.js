const StorieDTO = require("../dto/storie-dto");
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

      const responseGPT = await GPTService.generateText(params.title);

      const contentArrayByChatGPT =
        responseGPT.choices[0].message.content.split("\n");

      const storieDTO = new StorieDTO(
        params,
        formattedDate,
        contentArrayByChatGPT,
        slug
      );

      const result = await StorieService.createStorie(storieDTO);

      return result;
    } catch (err) {
      console.error("Controller Error: ", err);
    }
  }
};
