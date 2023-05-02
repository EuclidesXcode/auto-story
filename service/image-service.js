


class ImageService {

    static async convertImageToBlob(image) {

        try {
            
            const imageUrl = image.length > 0 ? image[0].url : "https://funilemy.com.br/blog/wp-content/uploads/2022/03/outreach-marketing.png";
            const response = await fetch(imageUrl);
            const blob = await response.blob();
            return blob;
            
        }catch(error) {

            console.log("Erro ao converter a imagem para blob: ", error);
        
        }

    }


}

module.exports = ImageService;