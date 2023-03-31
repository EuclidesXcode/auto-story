require("dotenv").config();
const { google } = require("googleapis");
const customsearch = google.customsearch("v1");

class GoogleSearch {
  static async getImageByTitle(title) {
    try {
      const API_KEY_GOOGLE_CLOUD = process.env.API_KEY_GOOGLE_CLOUD;
      const API_ID_CLIENT_GOOGLE = process.env.API_ID_CLIENT_GOOGLE;

      const response = await customsearch.cse.list({
        cx: API_ID_CLIENT_GOOGLE,
        q: title,
        searchType: "image",
        imgSize: "large",
        imgType: "photo",
        auth: API_KEY_GOOGLE_CLOUD,
      });

      if (response.data.items && response.data.items.length > 0) {
        console.log(
          "Aqui está o link da imagem: ",
          response.data.items[0].link
        );

        return response.data.items[0].link;
      } else {
        return null;
      }
    } catch (err) {
      console.error("Error on get google image URL: ", err);
    }
  }
}

module.exports = GoogleSearch;
