const { default: axios } = require("axios");



class ImageService {

    static async convertImageToBlob(image) {

        try {
            
            const imageUrl = image.length > 0 ? image[0].url : "https://static8.depositphotos.com/1052928/952/i/600/depositphotos_9520406-stock-photo-duck-white.jpg";

            console.log("Image url: ", imageUrl)

            const { data } = await axios.get(imageUrl, {
                headers: {
                    'Cache-Control': 'max-age=0',
                }, responseType: 'stream'
            });
           
            return data;
            
        }catch(error) {

            console.log("Erro ao converter a imagem para blob: ", error);
        
        }

    }


}

module.exports = ImageService;