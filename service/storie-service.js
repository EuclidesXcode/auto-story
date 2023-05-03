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
      const boundary = Math.random().toString().substring(2);

      const meuBlob = new Blob([image], { type: "image/jpeg" });

      const formData = new FormData();

      formData.append("file", meuBlob, {
        filename: "imagem.jpg",
        contentType: "image/jpeg",
      });

      formData.append("alt_text", "pato patati");
      formData.append("caption", "pato patata");
      formData.append("title", "pato patata");
      formData.append("description", "pato patata");

      console.log("meu form data gerado %j", boundary, formData);
      
      const response = await Axios.post(
        `${process.env.BASE_PATH}/wp-json/wp/v2/media`,
        formData,
        {
          headers: {
            "Content-Type": `multipart/form-data; boundary=${boundary}`,
            Authorization: `Bearer ${process.env.API_KEY_WP}`,
          },
        }
      );
      console.log("SALVOU IMAGEM DE CAPA %j", response?.data);
    } catch (error) {
      console.log("Erro ao inserir a imagem de capa: ", error);
    }
  }
}

module.exports = StoryService;
