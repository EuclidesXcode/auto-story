const axios = require("axios");

class GPTService {
  /**
   * @param {title} param titulo do story
   * @returns {Object} Retorno de um obijeto contendo os 7 paragrafos
   */
  static async generateContentStory(title) {
    try {
      const url = "https://api.openai.com/v1/chat/completions";

      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.API_KEY_OPEN_IA}`,
      };

      const content = `Retorne um array com 15 textos com no maximo 20 palavras, que tragam concordancia entre eles, baseados nesse titulo: ${title}`;

      const data = {
        messages: [{ role: "user", content: content }],
        model: "gpt-3.5-turbo",
        temperature: 0.7,
      };

      const response = await axios.post(url, data, { headers });

      return response.data;
    } catch (err) {
      console.error(
        "[gpt-service-generate-content-story] Error on generate Content Story: ",
        err
      );
    }
  }

  /**
   * @param {title} param titulo do story
   * @returns {Object} Retorno de um obijeto contendo as 10 tags
   */
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
      console.error(
        "[gpt-service-generate-tags] Error on generate Tags for Taxinomies: ",
        err
      );
    }
  }
}

module.exports = GPTService;
