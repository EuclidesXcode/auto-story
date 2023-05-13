module.exports = class StorieDTO {
  constructor(params, formattedDate, content, slug, imageFind) {
      this.title = params.title,
      this.status = "publish",
      this.content = `
      <html>
  <head>
    <meta charset="utf-8">
    <title>${params.title}</title>
    <link rel="canonical" href="${process.env.BASE_PATH_POST_1}">
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
    <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Oswald:200,300,400" rel="stylesheet">
    <style amp-custom>
      amp-story {
        font-family: 'Oswald',sans-serif;
        color: #fff;
      }

      amp-story-page {
        background-color: #000;
      }
      h1 {
        font-weight: bold;
        font-size: 1.600em;
        font-weight: normal;
        line-height: 1.174;
        margin-bottom: 10px;
      }
      p {
        font-family: Arial, Helvetica, sans-serif;
        font-weight: normal;
        font-size: 1.0em;
        line-height: 1.2em;
        color: #fff;
        margin-bottom: 10px;
      }
      q {
        font-weight: 300;
        font-size: 1.1em;
      }
      amp-story-grid-layer.bottom {
        align-content:end;
      }
      amp-story-grid-layer.noedge {
        padding: 0px;
      }
      amp-story-grid-layer.center-text {
        align-content: center;
      }
      .wrapper {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 50% 50%;
      }
      .banner-text {
        text-align: center;
        background-color: #000;
        line-height: 2em;
      }

      .mainTitle{
        margin:330px auto 0 auto; 
        width: 290px; 
        text-shadow: #000 1px 1px 12px;
        background-color: rgba(0, 0, 0, 0.7);
        padding: 5px;
        border-radius:7px; 
      }

      .textBox{
        padding: 5px; 
        border-radius:7px; 
        width: 290px; 
        margin: 0 auto; 
        background-color: rgba(0, 0, 0, 0.7)
      }

      .gradient{
        height: 100%;
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1));
        background-size: cover;
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      
    </style>
    <script async custom-element="amp-story" src="https://cdn.ampproject.org/v0/amp-story-1.0.js"></script>
  </head>
  <body>
    <amp-story standalone
        title="${params.title}"
        publisher="The BrazilTech"
        publisher-logo-src="https://thebraziltech.com.br/wp-content/uploads/2022/08/cropped-Captura-de-Tela-2022-08-06-as-15.29.16-1.png"
        poster-portrait-src="${imageFind.length > 0 ? imageFind[0].url : "https://funilemy.com.br/blog/wp-content/uploads/2022/03/outreach-marketing.png"}">
        <amp-story-page id="cover" auto-advance-after="7s"> 
            <amp-story-grid-layer template="fill">
                <amp-img
                    src="${imageFind.length > 0 ? imageFind[0].url : "https://funilemy.com.br/blog/wp-content/uploads/2022/03/outreach-marketing.png"}"
                    width="720"
                    height="1280"
                    layout="responsive">
                </amp-img>
            </amp-story-grid-layer>

            <amp-story-grid-layer template="fill">
                <div class="gradient"></div>
            </amp-story-grid-layer>

            <amp-story-grid-layer template="vertical">
                <h1 class="mainTitle">${params.title}</h1>
             
            </amp-story-grid-layer>
        </amp-story-page><!--END PAGE /////////////////////////////////-->

        <amp-story-page id="page2" auto-advance-after="7s"> 
            <amp-story-grid-layer template="fill">
                <amp-img
                    animate-in="zoom-out"
                    src="${imageFind.length > 0 ? imageFind[1].url : "https://funilemy.com.br/blog/wp-content/uploads/2022/03/outreach-marketing.png"}"
                    width="720"
                    height="1280"
                    layout="responsive">
                </amp-img>
            </amp-story-grid-layer>

            <amp-story-grid-layer template="fill">
                <div class="gradient"></div>
            </amp-story-grid-layer>

            <amp-story-grid-layer template="vertical">
                <h1 animate-in="fade-in" animate-in-duration="1.4s" class="mainTitle">${content[0]}</h1>
                <div class="textBox" animate-in="fly-in-bottom" animate-in-duration="2.5s">
                    <div animate-in="fade-in" animate-in-duration="3.5s">
                        <p>${content[1]}</p>
                    </div>
                  </div>
            </amp-story-grid-layer>
            <amp-story-page-outlink layout="nodisplay">
                <a href="${params.url_post}">Saiba mais</a></amp-story-page-outlink>
        </amp-story-page><!--END PAGE /////////////////////////////////-->

        <amp-story-page id="page3" auto-advance-after="7s"> 
            <amp-story-grid-layer template="fill">
                <amp-img
                    animate-in="zoom-out"
                    animate-in-duration="1.4s"
                    src="${imageFind.length > 0 ? imageFind[2].url : "https://funilemy.com.br/blog/wp-content/uploads/2022/03/outreach-marketing.png"}"
                    width="720"
                    height="1280"
                    layout="responsive">
                </amp-img>
            </amp-story-grid-layer>

            <amp-story-grid-layer template="fill">
                <div class="gradient"></div>
            </amp-story-grid-layer>

            <amp-story-grid-layer template="vertical">
                <h1 animate-in="fade-in" animate-in-duration="1.4s" class="mainTitle">${content[2]}</h1>
                <div class="textBox" animate-in="fly-in-bottom" animate-in-duration="2.5s">
                    <div animate-in="fade-in" animate-in-duration="3.5s">
                        <p>${content[3]}</p>
                    </div>
                    </div>
            </amp-story-grid-layer>
            <amp-story-page-outlink layout="nodisplay">
                <a href="${params.url_post}">Saiba mais</a></amp-story-page-outlink>
        </amp-story-page><!--END PAGE /////////////////////////////////-->

        <amp-story-page id="page4" auto-advance-after="7s"> 
            <amp-story-grid-layer template="fill">
                <amp-img
                    animate-in="zoom-out"
                    animate-in-duration="1.4s"
                    src="${imageFind.length > 0 ? imageFind[3].url : "https://funilemy.com.br/blog/wp-content/uploads/2022/03/outreach-marketing.png"}"
                    width="720"
                    height="1280"
                    layout="responsive">
                    </amp-img>
            </amp-story-grid-layer>

            <amp-story-grid-layer template="fill">
                <div class="gradient"></div>
            </amp-story-grid-layer>

            <amp-story-grid-layer template="vertical">
                <h1 animate-in="fade-in" animate-in-duration="1.4s" class="mainTitle">${content[4]}</h1>
                <div class="textBox" animate-in="fly-in-bottom" animate-in-duration="2.5s">
                    <div animate-in="fade-in" animate-in-duration="3.5s">
                        <p>${content[5]}</p>
                    </div>
                    </div>
            </amp-story-grid-layer>
            <amp-story-page-outlink layout="nodisplay">
                <a href="${params.url_post}">Saiba mais</a></amp-story-page-outlink>
        </amp-story-page><!--END PAGE /////////////////////////////////-->

        <amp-story-page id="page4" auto-advance-after="7s"> 
            <amp-story-grid-layer template="fill">
                <amp-img
                    animate-in="zoom-out"
                    animate-in-duration="1.4s"
                    src="${imageFind.length > 0 ? imageFind[4].url : "https://funilemy.com.br/blog/wp-content/uploads/2022/03/outreach-marketing.png"}"
                    width="720"
                    height="1280"
                    layout="responsive">
                </amp-img>
            </amp-story-grid-layer>

            <amp-story-grid-layer template="fill">
                <div class="gradient"></div>
            </amp-story-grid-layer>

            <amp-story-grid-layer template="vertical">
                <h1 animate-in="fade-in" animate-in-duration="1.4s" class="mainTitle">${content[6]}</h1>
                <div class="textBox" animate-in="fly-in-bottom" animate-in-duration="2.5s">
                    <div animate-in="fade-in" animate-in-duration="3.5s">
                        <p>${content[7]}</p>
                    </div>
                    </div>
            </amp-story-grid-layer>
            <amp-story-page-outlink layout="nodisplay">
                <a href="${params.url_post}">Saiba mais</a></amp-story-page-outlink>
        </amp-story-page><!--END PAGE /////////////////////////////////-->

        <amp-story-page id="page4" auto-advance-after="7s"> 
            <amp-story-grid-layer template="fill">
                <amp-img
                    animate-in="zoom-out"
                    animate-in-duration="1.4s"
                    src="${imageFind.length > 0 ? imageFind[5].url : "https://funilemy.com.br/blog/wp-content/uploads/2022/03/outreach-marketing.png"}"
                    width="720"
                    height="1280"
                    layout="responsive">
                </amp-img>
            </amp-story-grid-layer>

            <amp-story-grid-layer template="fill">
                <div class="gradient"></div>
            </amp-story-grid-layer>

            <amp-story-grid-layer template="vertical">
                <h1 animate-in="fade-in" animate-in-duration="1.4s" class="mainTitle">${content[8]}</h1>
                <div class="textBox" animate-in="fly-in-bottom" animate-in-duration="2.5s">
                    <div animate-in="fade-in" animate-in-duration="3.5s">
                        <p>${content[9]}</p>
                    </div>
                    </div>
            </amp-story-grid-layer>
            <amp-story-page-outlink layout="nodisplay">
                <a href="${params.url_post}">Saiba mais</a></amp-story-page-outlink>
        </amp-story-page><!--END PAGE /////////////////////////////////-->

        <amp-story-page id="page4" auto-advance-after="7s"> 
            <amp-story-grid-layer template="fill">
                <amp-im
                    animate-in="zoom-out"
                    animate-in-duration="1.4s"
                    src="${imageFind.length > 0 ? imageFind[6].url : "https://funilemy.com.br/blog/wp-content/uploads/2022/03/outreach-marketing.png"}"
                    width="720"
                    height="1280"
                    layout="responsive">
                </amp-img>
            </amp-story-grid-layer>

            <amp-story-grid-layer template="fill">
                <div class="gradient"></div>
            </amp-story-grid-layer>

            <amp-story-grid-layer template="vertical">
                <h1 animate-in="fade-in" animate-in-duration="1.4s" class="mainTitle">${content[10]}</h1>
                <div class="textBox" animate-in="fly-in-bottom" animate-in-duration="1.5s">
                    <div animate-in="fade-in" animate-in-duration="3.5s">
                        <p>${content[11]}</p>
                    </div>
                    </div>
            </amp-story-grid-layer>
            <amp-story-page-outlink layout="nodisplay">
                <a href="${params.url_post}">Saiba mais</a></amp-story-page-outlink>
        </amp-story-page><!--END PAGE /////////////////////////////////-->

    </amp-story>
  </body>
</html>
      `,
      this.story_data = {
        "pages": [
          {
            "elements": [
              {
                "type": "text",
                "text": content[0],
                "color": "#ffffff"
              },
              {
                "type": "image",
                "url": "https://funilemy.com.br/blog/wp-content/uploads/2022/03/outreach-marketing.png"
              }
            ]
          }
        ]
      }
  }
};
