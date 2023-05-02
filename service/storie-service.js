const Axios = require('axios')

class StoryService {

  static async createStory(storyDto) {
    try {
        
        console.log("entrou para criar o story")

      const response = await Axios.post(`${process.env.BASE_PATH}/wp-json/wp/v2/web-story`, storyDto, {
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
}

module.exports = StoryService;
