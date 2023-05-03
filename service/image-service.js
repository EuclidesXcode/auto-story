const { default: axios } = require("axios");

class ImageService {
  static async convertImageToBlob(image) {
    try {
      const imageUrl = image ? image :
        "https://static8.depositphotos.com/1052928/952/i/600/depositphotos_9520406-stock-photo-duck-white.jpg";

      const response = await axios.get(imageUrl, {
        responseType: "arraybuffer",
      });

      return response.data;
    } catch (error) {
      console.log("Erro ao converter a imagem para blob: ", error);
    }
  }
}

module.exports = ImageService;
