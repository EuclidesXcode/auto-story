const axios = require("axios");

class GPTService {

    static async generateText(title) {
        const url = "https://api.openai.com/v1/engines/davinci-codex/completions";

        console.log("Minha API_KEY: ", process.env.API_KEY_OPEN_IA)
        
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.API_KEY_OPEN_IA || "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"}`,
        };

        const newPronpt = `Retorne um array com 5 textos baseados nesse titulo: ${title}`
        
        const data = {
            prompt: newPronpt,
            max_tokens: 50,
            temperature: 0.5,
            n: 1,
            stop: "\n",
        };
        
        const response = await axios.post(url, data, { headers });

        console.log("Retorno do ChatGPT: ", response)
        
        return response.data.choices[0].text;
    };
}

module.exports = GPTService
