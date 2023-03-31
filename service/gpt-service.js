const axios = require("axios");

class GPTService {
  static async generateContentStory(title) {
    try {
      const url = "https://api.openai.com/v1/chat/completions";

      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.API_KEY_OPEN_IA}`,
      };

      const content = `Retorne um array com 7 paragrafos com no maximo 17 palavras, baseados nesse titulo: ${title}`;

      const data = {
        messages: [{ role: "user", content: content }],
        model: "gpt-3.5-turbo",
        temperature: 0.7,
      };

      const response = await axios.post(url, data, { headers });

      return response.data;
    } catch (err) {
      console.error("Error on generate Content Story: ", err);
    }
  }

  static async generateTags(title) {
    try {
      const url = "https://api.openai.com/v1/chat/completions";

      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.API_KEY_OPEN_IA}`,
      };

      const content = `Gere 10 tags atualizadas com base nos interesses atuais baseadas nesse titulo: ${title}`;

      const data = {
        messages: [{ role: "user", content: content }],
        model: "gpt-3.5-turbo",
        temperature: 0.7,
      };

      const response = await axios.post(url, data, { headers });

      return response.data;
    } catch (err) {
      console.error("Error on generate Tags for Taxinomies: ", err);
    }
  }
}

module.exports = GPTService;
