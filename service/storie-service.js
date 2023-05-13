const Axios = require("axios");

class StoryService {
  static async createStory(storyDto) {
    try {
      const response = await Axios.post(
        `${process.env.BASE_PATH_POST_1}/wp-json/web-stories/v1/web-story`,
        storyDto,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.API_KEY_WP_1}`,
          },
        }
      );

      return response.data.id;
    } catch (err) {
      console.error("[service-create-story] Error, storie not created: ", err);
    }
  }

  static async insertImageCover(image, title) {
    try {
      const boundary = Math.random().toString().substring(2);

      const meuBlob = new Blob([image], { type: "image/jpeg" });

      const formData = new FormData();

      formData.append("file", meuBlob, {
        filename: "imagem.jpg",
        contentType: "image/jpeg",
      });

      formData.append("alt_text", "pato patati");
      formData.append("caption", "pato patata");
      formData.append("title", title);
      formData.append("description", "pato patata");

      const response = await Axios.post(
        `${process.env.BASE_PATH_POST_1}/wp-json/wp/v2/media`,
        formData,
        {
          headers: {
            "Content-Type": `multipart/form-data; boundary=${boundary}`,
            Authorization: `Bearer ${process.env.API_KEY_WP_1}`,
          },
        }
      );

      return response.data.id;
    } catch (error) {
      console.log("Erro ao inserir a imagem de capa: ", error);
    }
  }

  static async insertTags(tags) {
    try {
      let tagsIds = [];
      const promises = [];

      for (const tagName of tags) {
        const newTag = {
          name: tagName.name,
          slug: tagName.name.toLowerCase().trim().replace(/\s+/g, "-"),
        };

        const promise = Axios.post(
          `${process.env.BASE_PATH_POST_1}/wp-json/wp/v2/tags`,
          newTag,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.API_KEY_WP_1}`,
            },
          }
        ).then((response) => {
          if (
            response.data &&
            response.data.id != null &&
            response.data.id != undefined
          )
            return tagsIds.push({ id: response.data.id });
        });

        promises.push(promise);
      }

      await Promise.all(promises);

      return tagsIds;
    } catch (error) {
      console.log("Erro ao criar relacionamento de imagem de capa: ", error);
    }
  }

  static async relationshipCoverStory(storyId, coverId) {
    try {
      // const dataStory = await Axios.get(
      //   `${process.env.BASE_PATH}/wp-json/web-stories/v1/web-story/${storyId}`,
      //   {
      //     headers: {
      //       "Content-Type": "application/json",
      //       Authorization: `Bearer ${process.env.API_KEY_WP}`,
      //     },
      //   }
      // );

      // title: dataStory.data.title,
      // content: dataStory.data.content,
      // taxonomy: {
      //   web_story_tag: tagIds,
      //   web_story_category: [],
      // },

      const payload = {
        featured_media: coverId,
      };

      console.log("Payload do relacionamento: %j", payload);

      const response = await Axios.put(
        `${process.env.BASE_PATH_POST_1}/wp-json/web-stories/v1/web-story/${storyId}`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.API_KEY_WP_1}`,
          },
        }
      );

      return response.data.id;
    } catch (error) {
      console.log("Erro ao criar relacionamento de imagem de capa: ", error);
    }
  }

  static async relationshipTagsStory(storyId, tagsId) {
    try {
      const promises = [];

      for (const tagId of tagsId) {
        const payload = {
          web_story_tag: tagId,
        };

        console.log("Payload do relacionamento: %j", payload);

        const promise = Axios.put(
          `${process.env.BASE_PATH_POST_1}/wp-json/web-stories/v1/web-story/${storyId}`,
          payload,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.API_KEY_WP_1}`,
            },
          }
        )
          .then((res) => console.log("STORY TAG UPDATED SUCCESS: %j", res.data))
          .catch((err) => console.log("STORY TAG UPDATE ERROR", err));

        promises.push(promise);
      }

      return await Promise.all(promises);
      
    } catch (error) {
      console.log("Erro ao criar relacionamento de imagem de capa: ", error);
    }
  }
}

module.exports = StoryService;
