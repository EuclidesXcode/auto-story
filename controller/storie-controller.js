const StorieDTO = require("../dto/storie-dto");
const StorieService = require("../service/storie-service");
const GPTService = require("../service/gpt-service");
const GoogleService = require("../service/google-search");
const ImageService = require("../service/image-service");

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

      const imageFind = await GoogleService.getImageByTitle(params.title);

      const imageBlob = await ImageService.convertImageToBlob(imageFind);

      const imageCoverId = await StorieService.insertImageCover(
        imageBlob,
        params.title
      );

      const contentArrayByChatGPT =
        contentStory.choices[0].message.content.split("\n");

      const storieDTO = new StorieDTO(
        params,
        formattedDate,
        contentArrayByChatGPT,
        slug,
        imageFind
      );

      const storyId = await StorieService.createStory(storieDTO);

      // taxonomias

      const categories = await GPTService.generateCategories(params.title);

      let categoriesList = [];

      categories.split(",").map((category) => {
        categoriesList.push({
          name: category.trim(),
          slug: category.toLowerCase().trim().replace(/\s+/g, "-"),
          description: category,
        });
      });

      console.log("CATEGORIAS: %j", categoriesList);

      const tags = await GPTService.generateTags(params.title);

      let tagList = [];

      tags.split(",").map((tag) => {
        tagList.push({
          name: tag.trim()
        });
      });

      const tagsIds = await StorieService.insertTags(tagList)

      console.log("TAGS: %j", tagsIds);

      // taxonomias

      const relationId = await StorieService.relationshipStory(
        storyId,
        imageCoverId,
        tagsIds
      );

      if (relationId) {
        return {
          statusCode: 201,
          body: relationId,
        };
      }

      return resultStory;
    } catch (err) {
      console.error("[story-controller-create-story] Error: ", err);
    }
  }
};
