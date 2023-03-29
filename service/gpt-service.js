const axios = require("axios");

class GPTService {

    static async generateText(title) {
        const url = "https://api.openai.com/v1/chat/completions";
        
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer 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`,
        };

        const content = `Retorne um array com 5 textos baseados nesse titulo: ${title}`
        
        const data = {
            messages: [{"role": "user", "content": content}],
            model: "gpt-3.5-turbo",
            temperature: 0.7
        };
        
        const response = await axios.post(url, data, { headers });

        console.log("Retorno do ChatGPT: ", response)
        
        return response.data.choices[0].text;
    };
}

module.exports = GPTService
