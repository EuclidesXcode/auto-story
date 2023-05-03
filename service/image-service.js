const { default: axios } = require("axios");



class ImageService {

    static async convertImageToBlob(image) {

        try {
            
            const imageUrl = "https://static8.depositphotos.com/1052928/952/i/600/depositphotos_9520406-stock-photo-duck-white.jpg" ;

            console.log("Image url: ", imageUrl)

            const response = await axios.get(imageUrl);
            console.log('data blob image',response.data.length);
            const imageBlob = new Blob([response.data], { type: "image/jpeg" });
            console.log('imagem transformada', imageBlob)
            return  imageBlob
            
        }catch(error) {

            console.log("Erro ao converter a imagem para blob: ", error);
        
        }

    }


}

module.exports = ImageService;