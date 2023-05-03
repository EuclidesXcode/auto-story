const Axios = require("axios");

class StoryService {
  static async createStory(storyDto) {
    try {
      console.log("entrou para criar o story");

      const response = await Axios.post(
        `${process.env.BASE_PATH}/wp-json/web-stories/v1/web-story`,
        storyDto,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.API_KEY_WP}`,
          },
        }
      );

      return response.data.id;
    } catch (err) {
      console.error("[service-create-story] Error, storie not created: ", err);
    }
  }

  static async insertImageCover(image) {
    try {
      const params = new URLSearchParams();

      const fileData = Buffer.from(image).toString("base64");
      
      params.append("file", fileData);

      console.log("meu form data aqui ó %j", params);

      const response = await Axios.post(
        `${process.env.BASE_PATH}/wp-json/wp/v2/media`,
        params,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${process.env.API_KEY_WP}`,
          },
        }
      );
      console.log("SALVOU IMAGEM DE CAPA %j", response);
    } catch (error) {
      console.log("Erro ao inserir a imagem de capa: ", error);
    }
  }
}

module.exports = StoryService;
