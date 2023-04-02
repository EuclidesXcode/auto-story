module.exports = class ImageDTO {
    constructor(params, formattedDate, slug, urlImage) {
        this.post_author = 1,
        this.post_date = formattedDate,
        this.post_date_gmt = formattedDate,
        this.post_content = '', 
        this.post_title = params.title,
        this.post_excerpt = params.excerpt,
        this.post_status = "inherit",
        this.comment_status = "closed",
        this.ping_status = "closed",
        this.post_name = slug,
        this.post_modified = formattedDate,
        this.post_modified_gmt = formattedDate,
        this.post_parent = 0,
        this.guid = urlImage || "https://i.ytimg.com/vi/mTYZ3Lj71c0/maxresdefault.jpg",
        this.post_type = "attachment",
        this.post_mime_type = "image/jpeg"
    }
  };
  