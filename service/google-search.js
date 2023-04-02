require("dotenv").config();
// const { google } = require("googleapis");
// const customsearch = google.customsearch("v1");

const GoogleImages = require('google-images');
const API_KEY_GOOGLE_CLOUD = process.env.API_KEY_GOOGLE_CLOUD;
const API_ID_CLIENT_GOOGLE = process.env.API_ID_CLIENT_GOOGLE;
const client = new GoogleImages(API_ID_CLIENT_GOOGLE, API_KEY_GOOGLE_CLOUD);

class GoogleService {
  static async getImageByTitle(title) {
    try {

      const response = await client.search(title)

      console.log("como vem o retorno do google: ", response)
      // if (response.data.items && response.data.items.length > 0) {
      //   console.log(
      //     "Aqui está o link da imagem: ",
      //     response
      //   );

        return response
      // } else {
      //   return null;
      // }
    } catch (err) {
      console.error(
        "[google-service-get-image-by-title] Error on get google image URL: ",
        err
      );
    }ƒ
  }
}

module.exports = GoogleService;
