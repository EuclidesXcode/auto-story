const Axios = require("axios");

class StoryService {
  static async createStory(storyDto) {
    try {

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

  static async insertImageCover(image, title) {
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
      formData.append("title", title);
      formData.append("description", "pato patata");

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

      return response.data.id;
    } catch (error) {
      console.log("Erro ao inserir a imagem de capa: ", error);
    }
  }

  static async relationImageCoverToStory(storyId, coverId) {
    try {
      const payload = 
      {
        meta: {
          _thumbnail_id: coverId
        }
      };
  
      const response = await Axios.post(
        `${process.env.BASE_PATH}/wp-json/web-stories/v1/web-story/${storyId}`, 
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.API_KEY_WP}`,
          },
        }
      );
  
      console.log("RELACIONAMENTO FEITO: ", response.data);
  
      return response.data.id;
    } catch (error) {
      console.log("Erro ao criar relacionamento de imagem de capa: ", error);
    }
  }
}

module.exports = StoryService;
