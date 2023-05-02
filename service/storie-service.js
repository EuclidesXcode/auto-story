const Axios = require('axios')

class StoryService {

  static async createStory(storyDto) {

    try {
        
        console.log("entrou para criar o story")

      const response = await Axios.post(`${process.env.BASE_PATH}/wp-json/web-stories/v1/web-story`, storyDto, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.API_KEY_WP}`
        }
      });

      return response.data;
    } catch (err) {
      console.error("[service-create-story] Error, storie not created: ", err);
    }
  }

  static async insertImageCover(image) {

    try {

      if(image.length > 0) {
        
        // codigo da imagem aqui
        // imagem de capa em image[0].url
        
      }

      
    } catch (error) {
      console.log("Erro ao inserir a imagem de capa: ", error)
    }
  }
}

module.exports = StoryService;
