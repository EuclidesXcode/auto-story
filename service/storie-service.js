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
      const formData = new FormData();

      formData.append("file", image,  'image112312321.jpg');

      console.log('meu form data aqui ó %j', formData)
      
      const response = await Axios.post(
        `${process.env.BASE_PATH}/wp-json/wp/v2/media`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "Cache-Control": "max-age=0",
            Authorization: `Bearer ${process.env.API_KEY_WP}`,
          }
        }
      );
      console.log("SALVOU IMAGEM DE CAPA %j", response);
    } catch (error) {
      console.log("Erro ao inserir a imagem de capa: ", error.reponse.data.message);
    }
  }
}

module.exports = StoryService;
