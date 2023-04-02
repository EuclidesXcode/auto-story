module.exports = class ImageDTO {
    constructor(params, formattedDate, slug, image) {
        this.post_author = 1,
        this.post_date = formattedDate,
        this.post_date_gmt = formattedDate,
        this.post_content = '', 
        this.post_title = image[0].url.split("/")[-1],
        this.post_excerpt = params.excerpt,
        this.post_status = "inherit",
        this.comment_status = "closed",
        this.ping_status = "closed",
        this.post_name = slug,
        this.post_modified = formattedDate,
        this.post_modified_gmt = formattedDate,
        this.post_parent = 0,
        this.guid = image[0].url,
        this.post_type = "attachment",
        this.post_mime_type = image[0].type
    }
  };
  