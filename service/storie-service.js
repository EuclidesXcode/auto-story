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
      const uint8Array = new Uint8Array(image);

  
      const boundary = Math.random().toString().substring(2);


      const body = `--${boundary}\r\n` +
      `Content-Disposition: form-data; name="imagem"; filename="image.jpg"\r\n` +
      `Content-Type: image/jpeg\r\n\r\n` +
      `${uint8Array}\r\n` +
      `--${boundary}--`;
    
      console.log("meu form data %j", boundary, body);
      const response = await Axios.post(
        `${process.env.BASE_PATH}/wp-json/wp/v2/media`,
        body,
        {
          headers: {
            "Content-Type": `multipart/form-data; boundary=${boundary}`,
            "Content-Length": body.length.toString(),
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
