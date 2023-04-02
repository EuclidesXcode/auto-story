require("dotenv").config();

const GoogleImages = require("google-images");

class GoogleService {
  static async getImageByTitle(title) {
    try {
      const API_KEY_GOOGLE_CLOUD = process.env.API_KEY_GOOGLE_CLOUD;
      const API_ID_CLIENT_GOOGLE = process.env.API_ID_CLIENT_GOOGLE;

      const client = new GoogleImages(
        API_ID_CLIENT_GOOGLE,
        API_KEY_GOOGLE_CLOUD
      );

      const response = await client.search(title, {
        size: "large",
        page: 2
      });

      console.log("RESULTADOS GOOGLE: ", response)

      return response;

    } catch (err) {
      console.error(
        "[google-service-get-image-by-title] Error on get google image URL: ",
        err
      );
    }
    ƒ;
  }
}

module.exports = GoogleService;
