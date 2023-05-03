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
      const blob = new Blob([image], { type: 'image/jpeg' });
  
      const boundary = "--------------------------" + Date.now().toString(16);

      let data = `--${boundary}\r\n`;
      data += `Content-Disposition: form-data; name="imagem"; filename="imagem.jpg"\r\n`;
      data += `Content-Type: image/jpeg\r\n\r\n`;
      data += `${blob}\r\n`;
      data += `--${boundary}--\r\n`;
      console.log("meu form data %j", boundary, data);
      const response = await Axios.post(
        `${process.env.BASE_PATH}/wp-json/wp/v2/media`,
        data,
        {
          headers: {
            "Content-Type": `multipart/form-data; boundary=${boundary}`,
            "Content-Length": data.length.toString(),
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
