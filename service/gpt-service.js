const axios = require("axios");

class GPTService {

    static async generateText(title) {
        const url = "https://api.openai.com/v1/chat/completions";

        console.log("MEU >ENV: ", process.env.API_KEY_OPEN_IA)
        
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.API_KEY_OPEN_IA}`
        };

        const content = `Retorne um array com 7 paragrafos com no maximo 15 palavras, baseados nesse titulo: ${title}`
        
        const data = {
            messages: [{"role": "user", "content": content}],
            model: "gpt-3.5-turbo",
            temperature: 0.7
        };
        
        const response = await axios.post(url, data, { headers });

        console.log("Retorno do ChatGPT: ", response)
        
        return response.data;
    };
}

module.exports = GPTService
