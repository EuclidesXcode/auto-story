


class ImageService {

    static async convertImageToBlob(image) {

        try {
            
            const imageUrl = image[0].url;
            const response = await fetch(imageUrl);
            const blob = await response.blob();
            return blob;
            
        }catch(error) {

            console.log("Erro ao converter a imagem para blob: ", error);
        
        }

    }


}

module.exports = ImageService;