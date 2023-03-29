module.exports = class StorieDTO {
  constructor(params, formattedDate, content) {
    (this.post_author = 1),
      (this.post_date = formattedDate),
      (this.post_date_gmt = formattedDate),
      (this.post_content = `
      <html amp="" lang="en">
         <head>
            <meta charset="utf-8" />
            <meta
               name="viewport"
               content="width=device-width,minimum-scale=1,initial-scale=1"
            />
            <script async="" src="https://cdn.ampproject.org/v0.js"></script>
            <script
               async=""
               src="https://cdn.ampproject.org/v0/amp-story-1.0.js"
               custom-element="amp-story"
            ></script>
            <link
               href="https://fonts.googleapis.com/css2?display=swap&amp;family=Montserrat%3Awght%40400%3B700"
               rel="stylesheet"
            />
            <link
               href="https://beneficioemfoco.com.br/wp-content/uploads/2023/03/cropped-bolsa-familia-de-900.png"
               rel="preload"
               as="image"
            />
            <style amp-boilerplate="">
               body {
               -webkit-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
               -moz-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
               -ms-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
               animation: -amp-start 8s steps(1, end) 0s 1 normal both;
               }
               @-webkit-keyframes -amp-start {
               from {
                  visibility: hidden;
               }
               to {
                  visibility: visible;
               }
               }
               @-moz-keyframes -amp-start {
               from {
                  visibility: hidden;
               }
               to {
                  visibility: visible;
               }
               }
               @-ms-keyframes -amp-start {
               from {
                  visibility: hidden;
               }
               to {
                  visibility: visible;
               }
               }
               @-o-keyframes -amp-start {
               from {
                  visibility: hidden;
               }
               to {
                  visibility: visible;
               }
               }
               @keyframes -amp-start {
               from {
                  visibility: hidden;
               }
               to {
                  visibility: visible;
               }
               }
            </style>
            <noscript
               ><style amp-boilerplate="">
               body {
                  -webkit-animation: none;
                  -moz-animation: none;
                  -ms-animation: none;
                  animation: none;
               }
               </style></noscript
            >
            <style amp-custom="">
               h1,
               h2,
               h3 {
               font-weight: normal;
               }

               amp-story-page {
               background-color: #131516;
               }

               amp-story-grid-layer {
               overflow: visible;
               }

               @media (max-aspect-ratio: 9 / 16) {
               @media (min-aspect-ratio: 320 / 678) {
                  amp-story-grid-layer.grid-layer {
                     margin-top: calc((100% / 0.5625 - 100% / 0.6666666666666666) / 2);
                  }
               }
               }

               @media not all and (min-resolution: 0.001dpcm) {
               @media {
                  p.text-wrapper > span {
                     font-size: calc(100% - 0.5px);
                  }
               }
               }

               .page-fullbleed-area,
               .page-background-overlay-area {
               position: absolute;
               overflow: hidden;
               width: 100%;
               left: 0;
               height: calc(1.1851851851851851 * 100%);
               top: calc((1 - 1.1851851851851851) * 100% / 2);
               }

               .element-overlay-area {
               position: absolute;
               width: 100%;
               height: 100%;
               top: 0;
               left: 0;
               }

               .page-safe-area {
               overflow: visible;
               position: absolute;
               top: 0;
               bottom: 0;
               left: 0;
               right: 0;
               width: 100%;
               height: calc(0.84375 * 100%);
               margin: auto 0;
               }

               .mask {
               position: absolute;
               overflow: hidden;
               }

               .fill {
               position: absolute;
               top: 0;
               left: 0;
               right: 0;
               bottom: 0;
               margin: 0;
               }

               @media (prefers-reduced-motion: no-preference) {
               .animation-wrapper {
                  opacity: var(--initial-opacity);
                  transform: var(--initial-transform);
               }
               }

               amp-story-grid-layer.align-bottom {
               align-content: end;
               padding: 0;
               }

               .captions-area {
               padding: 0 32px 0;
               }

               amp-story-captions {
               margin-bottom: 16px;
               text-align: center;
               }

               amp-story-captions span {
               display: inline-block;
               margin: 0;
               padding: 6px 12px;
               vertical-align: middle;
               border-radius: 15px;
               background: rgba(11, 11, 11, 0.6);
               color: rgba(255, 255, 255, 1);
               font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
                  Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
               font-size: calc(4 * var(--story-page-vw));
               line-height: 1.4;
               word-break: break-word;
               word-wrap: break-word;
               overflow-wrap: break-word;
               }
            </style>
            <meta name="web-stories-replace-head-start" />
            <title>
               ${params.title}
            </title>
            <link
               rel="canonical"
               href="https://beneficioemfoco.com.br/web-stories/bolsa-familia-governo-faz-mudancas-exclui-milhoes-de-beneficiarios-2/"
            />
            <meta name="web-stories-replace-head-end" />
         </head>
         <body>
            <amp-story
               standalone=""
               publisher="Benefício em Foco"
               publisher-logo-src="https://beneficioemfoco.com.br/wp-content/uploads/2023/03/cropped-info-moeda.png"
               title="${params.title}"
               poster-portrait-src="https://beneficioemfoco.com.br/wp-content/uploads/2023/03/cropped-bolsa-familia-de-900-640x853.png"
               ><amp-story-page
               id="e5e839ca-2903-403f-81a7-57fd8e2e7543"
               auto-advance-after="7s"
               ><amp-story-grid-layer
                  template="vertical"
                  aspect-ratio="412:618"
                  class="grid-layer"
                  ><div class="page-fullbleed-area" style="background-color: #94604a">
                     <div class="page-safe-area">
                     <div
                        style="
                           position: absolute;
                           pointer-events: none;
                           left: 0;
                           top: -9.25926%;
                           width: 100%;
                           height: 118.51852%;
                           opacity: 1;
                        "
                     >
                        <div
                           style="
                           pointer-events: initial;
                           width: 100%;
                           height: 100%;
                           display: block;
                           position: absolute;
                           top: 0;
                           left: 0;
                           z-index: 0;
                           "
                           class="mask"
                           id="el-0f7fbd3c-204d-4c6a-8480-93c4a823fd64"
                        >
                           <div
                           style="
                              position: absolute;
                              width: 133.38544%;
                              height: 100%;
                              left: -16.69272%;
                              top: 0%;
                           "
                           data-leaf-element="true"
                           >
                           <amp-img
                              layout="fill"
                              src="https://beneficioemfoco.com.br/wp-content/uploads/2023/03/cropped-bolsa-familia-de-900.png"
                              alt="${params.title}"
                              srcSet="https://beneficioemfoco.com.br/wp-content/uploads/2023/03/cropped-bolsa-familia-de-900-640x853.png 640w,https://beneficioemfoco.com.br/wp-content/uploads/2023/03/cropped-bolsa-familia-de-900-225x300.png 225w,https://beneficioemfoco.com.br/wp-content/uploads/2023/03/cropped-bolsa-familia-de-900-150x200.png 150w"
                              sizes="(min-width: 1024px) 60vh, 133vw"
                              disable-inline-width="true"
                           ></amp-img>
                           </div>
                           <div
                           class="element-overlay-area"
                           style="
                              background-image: linear-gradient(
                                 0.5turn,
                                 rgba(0, 0, 0, 0) 40%,
                                 rgba(0, 0, 0, 0.5) 100%
                              );
                           "
                           ></div>
                        </div>
                     </div>
                     <div
                        class="page-background-overlay-area"
                        style="
                           background-image: linear-gradient(
                           0.5turn,
                           rgba(0, 0, 0, 0) 40%,
                           rgba(0, 0, 0, 0.5) 100%
                           );
                        "
                     ></div>
                     </div></div></amp-story-grid-layer
               ><amp-story-grid-layer
                  template="vertical"
                  aspect-ratio="412:618"
                  class="grid-layer"
                  ><div class="page-fullbleed-area">
                     <div class="page-safe-area">
                     <div
                        style="
                           position: absolute;
                           pointer-events: none;
                           left: 10.92233%;
                           top: 65.69579%;
                           width: 82.28155%;
                           height: 23.94822%;
                           opacity: 1;
                        "
                     >
                        <div
                           style="
                           pointer-events: initial;
                           width: 100%;
                           height: 100%;
                           display: block;
                           position: absolute;
                           top: 0;
                           left: 0;
                           z-index: 0;
                           border-radius: 0.5899705014749262% 0.5899705014749262%
                              0.5899705014749262% 0.5899705014749262% /
                              1.3513513513513513% 1.3513513513513513%
                              1.3513513513513513% 1.3513513513513513%;
                           background-clip: content-box;
                           background-color: rgba(0, 0, 0, 0.5);
                           "
                           id="el-e23b5d34-7d04-489e-b072-3781b26c30ae"
                        >
                           <h3
                           class="fill text-wrapper"
                           style="
                              white-space: pre-line;
                              overflow-wrap: break-word;
                              word-break: break-word;
                              margin: 0.0700589970501477% 0;
                              font-family: 'Montserrat', sans-serif;
                              font-size: 0.404531em;
                              line-height: 1.2;
                              text-align: left;
                              padding: 4.129793510324483% 5.3097345132743365%;
                              color: #000000;
                           "
                           >
                           <span
                              ><span style="font-weight: 700; color: #ffcc4a"
                                 >${content[0]}</span
                              ></span
                           >
                           </h3>
                        </div>
                     </div>
                     </div>
                  </div></amp-story-grid-layer
               ><amp-story-page-outlink layout="nodisplay"
                  ><a
                     href="${params.url_post}"
                     rel="nofollow"
                     >Saiba mais</a
                  ></amp-story-page-outlink
               ></amp-story-page
               ><amp-story-page
               id="dc77421c-276b-40af-9b90-aae717b13669"
               auto-advance-after="7s"
               ><amp-story-animation layout="nodisplay" trigger="visibility"
                  ><script type="application/json">
                     [{"selector":"#anim-a0753f82-8d7a-4712-82a1-7352668cea0c [data-leaf-element="true"]","keyframes":{"transform":["translate3d(12.016296273055595%, 0, 0)","translate3d(0%, 0, 0)"]},"delay":0,"duration":1500,"easing":"cubic-bezier(.3,0,.55,1)","fill":"both"}]
                  </script></amp-story-animation
               ><amp-story-animation layout="nodisplay" trigger="visibility"
                  ><script type="application/json">
                     [
                     {
                        "selector": "#anim-f1ddc1c9-2697-4fe4-9f4d-d079e4167c93",
                        "keyframes": { "opacity": [0, 1] },
                        "delay": 0,
                        "duration": 1500,
                        "easing": "cubic-bezier(0.2, 0.6, 0.0, 1)",
                        "fill": "both"
                     }
                     ]
                  </script></amp-story-animation
               ><amp-story-animation layout="nodisplay" trigger="visibility"
                  ><script type="application/json">
                     [
                     {
                        "selector": "#anim-dc50272d-487a-4348-8744-aa444c041d51",
                        "keyframes": {
                           "transform": [
                           "translate3d(0px, 175.71056%, 0)",
                           "translate3d(0px, 0px, 0)"
                           ]
                        },
                        "delay": 0,
                        "duration": 1500,
                        "easing": "cubic-bezier(0.2, 0.6, 0.0, 1)",
                        "fill": "both"
                     }
                     ]
                  </script></amp-story-animation
               ><amp-story-grid-layer
                  template="vertical"
                  aspect-ratio="412:618"
                  class="grid-layer"
                  ><div class="page-fullbleed-area" style="background-color: #fff">
                     <div class="page-safe-area">
                     <div
                        style="
                           position: absolute;
                           pointer-events: none;
                           left: 0;
                           top: -9.25926%;
                           width: 100%;
                           height: 118.51852%;
                           opacity: 1;
                        "
                     >
                        <div
                           id="anim-a0753f82-8d7a-4712-82a1-7352668cea0c"
                           class="animation-wrapper"
                           style="
                           width: 100%;
                           height: 100%;
                           display: block;
                           position: absolute;
                           top: 0;
                           left: 0;
                           "
                        >
                           <div
                           style="
                              pointer-events: initial;
                              width: 100%;
                              height: 100%;
                              display: block;
                              position: absolute;
                              top: 0;
                              left: 0;
                              z-index: 0;
                           "
                           class="mask"
                           id="el-517abc8c-727f-48d7-adf2-f2ee77796228"
                           >
                           <div
                              style="
                                 position: absolute;
                                 width: 266.92734%;
                                 height: 100%;
                                 left: -32.07478%;
                                 top: 0%;
                              "
                              data-leaf-element="true"
                           >
                              <amp-img
                                 layout="fill"
                                 src="https://beneficioemfoco.com.br/wp-content/uploads/2023/03/bolsa-familia-2022-scaled.jpeg"
                                 alt="${params.title}"
                                 srcSet="https://beneficioemfoco.com.br/wp-content/uploads/2023/03/bolsa-familia-2022-scaled.jpeg 2560w,https://beneficioemfoco.com.br/wp-content/uploads/2023/03/bolsa-familia-2022-2048x1364.jpeg 2048w,https://beneficioemfoco.com.br/wp-content/uploads/2023/03/bolsa-familia-2022-1536x1023.jpeg 1536w,https://beneficioemfoco.com.br/wp-content/uploads/2023/03/bolsa-familia-2022-1024x682.jpeg 1024w,https://beneficioemfoco.com.br/wp-content/uploads/2023/03/bolsa-familia-2022-768x511.jpeg 768w,https://beneficioemfoco.com.br/wp-content/uploads/2023/03/bolsa-familia-2022-300x200.jpeg 300w,https://beneficioemfoco.com.br/wp-content/uploads/2023/03/bolsa-familia-2022-150x100.jpeg 150w"
                                 sizes="(min-width: 1024px) 120vh, 267vw"
                                 disable-inline-width="true"
                              ></amp-img>
                           </div>
                           <div
                              class="element-overlay-area"
                              style="
                                 background-image: linear-gradient(
                                 0.5turn,
                                 rgba(0, 0, 0, 0) 0%,
                                 rgba(0, 0, 0, 0.3) 100%
                                 );
                              "
                           ></div>
                           </div>
                        </div>
                     </div>
                     <div
                        class="page-background-overlay-area"
                        style="
                           background-image: linear-gradient(
                           0.5turn,
                           rgba(0, 0, 0, 0) 0%,
                           rgba(0, 0, 0, 0.3) 100%
                           );
                        "
                     ></div>
                     </div></div></amp-story-grid-layer
               ><amp-story-grid-layer
                  template="vertical"
                  aspect-ratio="412:618"
                  class="grid-layer"
                  ><div class="page-fullbleed-area">
                     <div class="page-safe-area">
                     <div
                        style="
                           position: absolute;
                           pointer-events: none;
                           left: 9.2233%;
                           top: 60.35599%;
                           width: 81.31068%;
                           height: 27.83172%;
                           opacity: 1;
                        "
                     >
                        <div
                           id="anim-f1ddc1c9-2697-4fe4-9f4d-d079e4167c93"
                           class="animation-wrapper"
                           style="
                           width: 100%;
                           height: 100%;
                           display: block;
                           position: absolute;
                           top: 0;
                           left: 0;
                           --initial-opacity: 0;
                           --initial-transform: none;
                           "
                        >
                           <div
                           id="anim-dc50272d-487a-4348-8744-aa444c041d51"
                           class="animation-wrapper"
                           style="
                              width: 100%;
                              height: 100%;
                              display: block;
                              position: absolute;
                              top: 0;
                              left: 0;
                              --initial-opacity: 1;
                              --initial-transform: translate3d(0px, 175.71056%, 0);
                           "
                           >
                           <div
                              style="
                                 pointer-events: initial;
                                 width: 100%;
                                 height: 100%;
                                 display: block;
                                 position: absolute;
                                 top: 0;
                                 left: 0;
                                 z-index: 0;
                                 border-radius: 0.5970149253731344% 0.5970149253731344%
                                 0.5970149253731344% 0.5970149253731344% /
                                 1.1627906976744187% 1.1627906976744187%
                                 1.1627906976744187% 1.1627906976744187%;
                                 background-clip: content-box;
                                 background-color: rgba(0, 0, 0, 0.5);
                              "
                              id="el-6ab4f55d-0735-4efc-b420-596b4bc2b1e9"
                           >
                              <p
                                 class="fill text-wrapper"
                                 style="
                                 white-space: pre-line;
                                 overflow-wrap: break-word;
                                 word-break: break-word;
                                 margin: 0.056716417910448146% 0;
                                 font-family: 'Montserrat', sans-serif;
                                 font-size: 0.323625em;
                                 line-height: 1.2;
                                 text-align: left;
                                 padding: 4.179104477611941% 5.3731343283582085%;
                                 color: #000000;
                                 "
                              >
                                 <span
                                 ><span style="color: #fff"
                                    >${content[1]}</span
                                 ></span
                                 >
                              </p>
                           </div>
                           </div>
                        </div>
                     </div>
                     </div>
                  </div></amp-story-grid-layer
               ><amp-story-page-outlink layout="nodisplay"
                  ><a
                     href="${params.url_post}"
                     rel="nofollow"
                     >Saiba mais</a
                  ></amp-story-page-outlink
               ></amp-story-page
               ><amp-story-page
               id="6c5bbef1-5295-4564-8e89-c1394e2c3ac1"
               auto-advance-after="7s"
               ><amp-story-animation layout="nodisplay" trigger="visibility"
                  ><script type="application/json">
                     [{"selector":"#anim-1b02fb2b-92a7-4913-a315-02737f90ea40 [data-leaf-element="true"]","keyframes":{"transform":["translate3d(31.257324105020174%, 0, 0)","translate3d(0%, 0, 0)"]},"delay":0,"duration":1500,"easing":"cubic-bezier(.3,0,.55,1)","fill":"both"}]
                  </script></amp-story-animation
               ><amp-story-animation layout="nodisplay" trigger="visibility"
                  ><script type="application/json">
                     [
                     {
                        "selector": "#anim-0cbf871b-3ee3-4fb6-ace6-8a4e78decae7",
                        "keyframes": { "opacity": [0, 1] },
                        "delay": 0,
                        "duration": 1500,
                        "easing": "cubic-bezier(0.2, 0.6, 0.0, 1)",
                        "fill": "both"
                     }
                     ]
                  </script></amp-story-animation
               ><amp-story-animation layout="nodisplay" trigger="visibility"
                  ><script type="application/json">
                     [
                     {
                        "selector": "#anim-73c0cc22-f192-481b-9a3f-2aace4886aa4",
                        "keyframes": {
                           "transform": [
                           "translate3d(0px, 169.89661%, 0)",
                           "translate3d(0px, 0px, 0)"
                           ]
                        },
                        "delay": 0,
                        "duration": 1500,
                        "easing": "cubic-bezier(0.2, 0.6, 0.0, 1)",
                        "fill": "both"
                     }
                     ]
                  </script></amp-story-animation
               ><amp-story-grid-layer
                  template="vertical"
                  aspect-ratio="412:618"
                  class="grid-layer"
                  ><div class="page-fullbleed-area" style="background-color: #fff">
                     <div class="page-safe-area">
                     <div
                        style="
                           position: absolute;
                           pointer-events: none;
                           left: 0;
                           top: -9.25926%;
                           width: 100%;
                           height: 118.51852%;
                           opacity: 1;
                        "
                     >
                        <div
                           id="anim-1b02fb2b-92a7-4913-a315-02737f90ea40"
                           class="animation-wrapper"
                           style="
                           width: 100%;
                           height: 100%;
                           display: block;
                           position: absolute;
                           top: 0;
                           left: 0;
                           "
                        >
                           <div
                           style="
                              pointer-events: initial;
                              width: 100%;
                              height: 100%;
                              display: block;
                              position: absolute;
                              top: 0;
                              left: 0;
                              z-index: 0;
                           "
                           class="mask"
                           id="el-f5b879be-cd3a-402a-a190-92c1667cf1ff"
                           >
                           <div
                              style="
                                 position: absolute;
                                 width: 266.77088%;
                                 height: 100%;
                                 left: -83.38544%;
                                 top: 0%;
                              "
                              data-leaf-element="true"
                           >
                              <amp-img
                                 layout="fill"
                                 src="https://beneficioemfoco.com.br/wp-content/uploads/2023/03/calendario-auxilio-brasil-outubro.jpeg"
                                 alt="${params.title}"
                                 srcSet="https://beneficioemfoco.com.br/wp-content/uploads/2023/03/calendario-auxilio-brasil-outubro.jpeg 1280w,https://beneficioemfoco.com.br/wp-content/uploads/2023/03/calendario-auxilio-brasil-outubro-1024x682.jpeg 1024w,https://beneficioemfoco.com.br/wp-content/uploads/2023/03/calendario-auxilio-brasil-outubro-768x512.jpeg 768w,https://beneficioemfoco.com.br/wp-content/uploads/2023/03/calendario-auxilio-brasil-outubro-300x200.jpeg 300w,https://beneficioemfoco.com.br/wp-content/uploads/2023/03/calendario-auxilio-brasil-outubro-150x100.jpeg 150w"
                                 sizes="(min-width: 1024px) 120vh, 267vw"
                                 disable-inline-width="true"
                              ></amp-img>
                           </div>
                           <div
                              class="element-overlay-area"
                              style="
                                 background-image: linear-gradient(
                                 0.5turn,
                                 rgba(0, 0, 0, 0) 0%,
                                 rgba(0, 0, 0, 0.7) 100%
                                 );
                              "
                           ></div>
                           </div>
                        </div>
                     </div>
                     <div
                        class="page-background-overlay-area"
                        style="
                           background-image: linear-gradient(
                           0.5turn,
                           rgba(0, 0, 0, 0) 0%,
                           rgba(0, 0, 0, 0.7) 100%
                           );
                        "
                     ></div>
                     </div></div></amp-story-grid-layer
               ><amp-story-grid-layer
                  template="vertical"
                  aspect-ratio="412:618"
                  class="grid-layer"
                  ><div class="page-fullbleed-area">
                     <div class="page-safe-area">
                     <div
                        style="
                           position: absolute;
                           pointer-events: none;
                           left: 9.2233%;
                           top: 61.97411%;
                           width: 81.31068%;
                           height: 27.83172%;
                           opacity: 1;
                        "
                     >
                        <div
                           id="anim-0cbf871b-3ee3-4fb6-ace6-8a4e78decae7"
                           class="animation-wrapper"
                           style="
                           width: 100%;
                           height: 100%;
                           display: block;
                           position: absolute;
                           top: 0;
                           left: 0;
                           --initial-opacity: 0;
                           --initial-transform: none;
                           "
                        >
                           <div
                           id="anim-73c0cc22-f192-481b-9a3f-2aace4886aa4"
                           class="animation-wrapper"
                           style="
                              width: 100%;
                              height: 100%;
                              display: block;
                              position: absolute;
                              top: 0;
                              left: 0;
                              --initial-opacity: 1;
                              --initial-transform: translate3d(0px, 169.89661%, 0);
                           "
                           >
                           <div
                              style="
                                 pointer-events: initial;
                                 width: 100%;
                                 height: 100%;
                                 display: block;
                                 position: absolute;
                                 top: 0;
                                 left: 0;
                                 z-index: 0;
                                 border-radius: 0.5970149253731344% 0.5970149253731344%
                                 0.5970149253731344% 0.5970149253731344% /
                                 1.1627906976744187% 1.1627906976744187%
                                 1.1627906976744187% 1.1627906976744187%;
                                 background-clip: content-box;
                                 background-color: rgba(0, 0, 0, 0.5);
                              "
                              id="el-314d23ad-c997-4e34-9b65-fe9138c75583"
                           >
                              <p
                                 class="fill text-wrapper"
                                 style="
                                 white-space: pre-line;
                                 overflow-wrap: break-word;
                                 word-break: break-word;
                                 margin: 0.056716417910448146% 0;
                                 font-family: 'Montserrat', sans-serif;
                                 font-size: 0.323625em;
                                 line-height: 1.2;
                                 text-align: left;
                                 padding: 4.179104477611941% 5.3731343283582085%;
                                 color: #000000;
                                 "
                              >
                                 <span
                                 ><span style="color: #fff"
                                    >${content[2]}</span
                                 ></span
                                 >
                              </p>
                           </div>
                           </div>
                        </div>
                     </div>
                     </div>
                  </div></amp-story-grid-layer
               ><amp-story-page-outlink layout="nodisplay"
                  ><a
                     href="${params.url_post}"
                     rel="nofollow"
                     >Saiba mais</a
                  ></amp-story-page-outlink
               ></amp-story-page
               ><amp-story-page
               id="f14f1521-5071-46c7-9d91-69bda6594560"
               auto-advance-after="7s"
               ><amp-story-animation layout="nodisplay" trigger="visibility"
                  ><script type="application/json">
                     [{"selector":"#anim-8f6ab303-d649-423b-87d5-90f35a98f56d [data-leaf-element="true"]","keyframes":{"transform":["translate3d(32.42187489333662%, 0, 0)","translate3d(0%, 0, 0)"]},"delay":0,"duration":1500,"easing":"cubic-bezier(.3,0,.55,1)","fill":"both"}]
                  </script></amp-story-animation
               ><amp-story-animation layout="nodisplay" trigger="visibility"
                  ><script type="application/json">
                     [
                     {
                        "selector": "#anim-b7fab99a-a642-4f72-b81c-6c48d7b5b186",
                        "keyframes": { "opacity": [0, 1] },
                        "delay": 0,
                        "duration": 1500,
                        "easing": "cubic-bezier(0.2, 0.6, 0.0, 1)",
                        "fill": "both"
                     }
                     ]
                  </script></amp-story-animation
               ><amp-story-animation layout="nodisplay" trigger="visibility"
                  ><script type="application/json">
                     [
                     {
                        "selector": "#anim-5aee6475-7070-4e5a-8546-009d1d07da36",
                        "keyframes": {
                           "transform": [
                           "translate3d(0px, 213.08251%, 0)",
                           "translate3d(0px, 0px, 0)"
                           ]
                        },
                        "delay": 0,
                        "duration": 1500,
                        "easing": "cubic-bezier(0.2, 0.6, 0.0, 1)",
                        "fill": "both"
                     }
                     ]
                  </script></amp-story-animation
               ><amp-story-grid-layer
                  template="vertical"
                  aspect-ratio="412:618"
                  class="grid-layer"
                  ><div class="page-fullbleed-area" style="background-color: #fff">
                     <div class="page-safe-area">
                     <div
                        style="
                           position: absolute;
                           pointer-events: none;
                           left: 0;
                           top: -9.25926%;
                           width: 100%;
                           height: 118.51852%;
                           opacity: 1;
                        "
                     >
                        <div
                           id="anim-8f6ab303-d649-423b-87d5-90f35a98f56d"
                           class="animation-wrapper"
                           style="
                           width: 100%;
                           height: 100%;
                           display: block;
                           position: absolute;
                           top: 0;
                           left: 0;
                           "
                        >
                           <div
                           style="
                              pointer-events: initial;
                              width: 100%;
                              height: 100%;
                              display: block;
                              position: absolute;
                              top: 0;
                              left: 0;
                              z-index: 0;
                           "
                           class="mask"
                           id="el-7da39283-2218-4129-ace7-c3739bd810eb"
                           >
                           <div
                              style="
                                 position: absolute;
                                 width: 284.44445%;
                                 height: 100%;
                                 left: -92.22222%;
                                 top: 0%;
                              "
                              data-leaf-element="true"
                           >
                              <amp-img
                                 layout="fill"
                                 src="https://beneficioemfoco.com.br/wp-content/uploads/2023/03/auxilio-brasil-de-outubro-800.jpeg"
                                 alt="${params.title}"
                                 srcSet="https://beneficioemfoco.com.br/wp-content/uploads/2023/03/auxilio-brasil-de-outubro-800.jpeg 1200w,https://beneficioemfoco.com.br/wp-content/uploads/2023/03/auxilio-brasil-de-outubro-800-1024x640.jpeg 1024w,https://beneficioemfoco.com.br/wp-content/uploads/2023/03/auxilio-brasil-de-outubro-800-768x480.jpeg 768w,https://beneficioemfoco.com.br/wp-content/uploads/2023/03/auxilio-brasil-de-outubro-800-300x188.jpeg 300w,https://beneficioemfoco.com.br/wp-content/uploads/2023/03/auxilio-brasil-de-outubro-800-150x94.jpeg 150w"
                                 sizes="(min-width: 1024px) 128vh, 285vw"
                                 disable-inline-width="true"
                              ></amp-img>
                           </div>
                           <div
                              class="element-overlay-area"
                              style="
                                 background-image: linear-gradient(
                                 0.5turn,
                                 rgba(0, 0, 0, 0) 26%,
                                 rgba(0, 0, 0, 0.5) 76%
                                 );
                              "
                           ></div>
                           </div>
                        </div>
                     </div>
                     <div
                        class="page-background-overlay-area"
                        style="
                           background-image: linear-gradient(
                           0.5turn,
                           rgba(0, 0, 0, 0) 26%,
                           rgba(0, 0, 0, 0.5) 76%
                           );
                        "
                     ></div>
                     </div></div></amp-story-grid-layer
               ><amp-story-grid-layer
                  template="vertical"
                  aspect-ratio="412:618"
                  class="grid-layer"
                  ><div class="page-fullbleed-area">
                     <div class="page-safe-area">
                     <div
                        style="
                           position: absolute;
                           pointer-events: none;
                           left: 9.2233%;
                           top: 66.50485%;
                           width: 81.31068%;
                           height: 20.06472%;
                           opacity: 1;
                        "
                     >
                        <div
                           id="anim-b7fab99a-a642-4f72-b81c-6c48d7b5b186"
                           class="animation-wrapper"
                           style="
                           width: 100%;
                           height: 100%;
                           display: block;
                           position: absolute;
                           top: 0;
                           left: 0;
                           --initial-opacity: 0;
                           --initial-transform: none;
                           "
                        >
                           <div
                           id="anim-5aee6475-7070-4e5a-8546-009d1d07da36"
                           class="animation-wrapper"
                           style="
                              width: 100%;
                              height: 100%;
                              display: block;
                              position: absolute;
                              top: 0;
                              left: 0;
                              --initial-opacity: 1;
                              --initial-transform: translate3d(0px, 213.08251%, 0);
                           "
                           >
                           <div
                              style="
                                 pointer-events: initial;
                                 width: 100%;
                                 height: 100%;
                                 display: block;
                                 position: absolute;
                                 top: 0;
                                 left: 0;
                                 z-index: 0;
                                 border-radius: 0.5970149253731344% 0.5970149253731344%
                                 0.5970149253731344% 0.5970149253731344% /
                                 1.6129032258064515% 1.6129032258064515%
                                 1.6129032258064515% 1.6129032258064515%;
                                 background-clip: content-box;
                                 background-color: rgba(0, 0, 0, 0.5);
                              "
                              id="el-e0786df8-bbec-46f1-91f3-7d0425da16b7"
                           >
                              <p
                                 class="fill text-wrapper"
                                 style="
                                 white-space: pre-line;
                                 overflow-wrap: break-word;
                                 word-break: break-word;
                                 margin: 0.056716417910448146% 0;
                                 font-family: 'Montserrat', sans-serif;
                                 font-size: 0.323625em;
                                 line-height: 1.2;
                                 text-align: left;
                                 padding: 4.179104477611941% 5.3731343283582085%;
                                 color: #000000;
                                 "
                              >
                                 <span
                                 ><span style="color: #fff"
                                    >${content[3]}</span
                                 ></span
                                 >
                              </p>
                           </div>
                           </div>
                        </div>
                     </div>
                     </div>
                  </div></amp-story-grid-layer
               ><amp-story-page-outlink layout="nodisplay"
                  ><a
                     href="${params.url_post}"
                     rel="nofollow"
                     >Saiba mais</a
                  ></amp-story-page-outlink
               ></amp-story-page
               ><amp-story-page
               id="a2e330fe-7dc3-4946-a8d0-38bc94548fa9"
               auto-advance-after="7s"
               ><amp-story-animation layout="nodisplay" trigger="visibility"
                  ><script type="application/json">
                     [{"selector":"#anim-9a0abafc-b280-45c1-bbff-d3bfb1f3da73 [data-leaf-element="true"]","keyframes":{"transform":["translate3d(21.874999829338595%, 0, 0)","translate3d(0%, 0, 0)"]},"delay":0,"duration":1500,"easing":"cubic-bezier(.3,0,.55,1)","fill":"both"}]
                  </script></amp-story-animation
               ><amp-story-animation layout="nodisplay" trigger="visibility"
                  ><script type="application/json">
                     [
                     {
                        "selector": "#anim-34b05cd7-ca9c-4ada-8f8c-b5557e836fa5",
                        "keyframes": { "opacity": [0, 1] },
                        "delay": 0,
                        "duration": 1500,
                        "easing": "cubic-bezier(0.2, 0.6, 0.0, 1)",
                        "fill": "both"
                     }
                     ]
                  </script></amp-story-animation
               ><amp-story-animation layout="nodisplay" trigger="visibility"
                  ><script type="application/json">
                     [
                     {
                        "selector": "#anim-5175b87c-7193-444c-8e71-daaf727669af",
                        "keyframes": {
                           "transform": [
                           "translate3d(0px, 165.41949%, 0)",
                           "translate3d(0px, 0px, 0)"
                           ]
                        },
                        "delay": 0,
                        "duration": 1500,
                        "easing": "cubic-bezier(0.2, 0.6, 0.0, 1)",
                        "fill": "both"
                     }
                     ]
                  </script></amp-story-animation
               ><amp-story-grid-layer
                  template="vertical"
                  aspect-ratio="412:618"
                  class="grid-layer"
                  ><div class="page-fullbleed-area" style="background-color: #fff">
                     <div class="page-safe-area">
                     <div
                        style="
                           position: absolute;
                           pointer-events: none;
                           left: 0;
                           top: -9.25926%;
                           width: 100%;
                           height: 118.51852%;
                           opacity: 1;
                        "
                     >
                        <div
                           id="anim-9a0abafc-b280-45c1-bbff-d3bfb1f3da73"
                           class="animation-wrapper"
                           style="
                           width: 100%;
                           height: 100%;
                           display: block;
                           position: absolute;
                           top: 0;
                           left: 0;
                           "
                        >
                           <div
                           style="
                              pointer-events: initial;
                              width: 100%;
                              height: 100%;
                              display: block;
                              position: absolute;
                              top: 0;
                              left: 0;
                              z-index: 0;
                           "
                           class="mask"
                           id="el-04a11c3f-c5bb-4c37-bac5-29c1ae2e72a6"
                           >
                           <div
                              style="
                                 position: absolute;
                                 width: 177.77778%;
                                 height: 100%;
                                 left: -38.88889%;
                                 top: 0%;
                              "
                              data-leaf-element="true"
                           >
                              <amp-img
                                 layout="fill"
                                 src="https://beneficioemfoco.com.br/wp-content/uploads/2023/03/emprestimo-mei.webp"
                                 alt="${params.title}"
                                 srcSet="https://beneficioemfoco.com.br/wp-content/uploads/2023/03/emprestimo-mei.webp 1200w,https://beneficioemfoco.com.br/wp-content/uploads/2023/03/emprestimo-mei-1024x1024.webp 1024w,https://beneficioemfoco.com.br/wp-content/uploads/2023/03/emprestimo-mei-768x768.webp 768w,https://beneficioemfoco.com.br/wp-content/uploads/2023/03/emprestimo-mei-300x300.webp 300w,https://beneficioemfoco.com.br/wp-content/uploads/2023/03/emprestimo-mei-150x150.webp 150w,https://beneficioemfoco.com.br/wp-content/uploads/2023/03/emprestimo-mei-96x96.webp 96w"
                                 sizes="(min-width: 1024px) 80vh, 178vw"
                                 disable-inline-width="true"
                              ></amp-img>
                           </div>
                           <div
                              class="element-overlay-area"
                              style="
                                 background-image: linear-gradient(
                                 0.5turn,
                                 rgba(0, 0, 0, 0) 40%,
                                 rgba(0, 0, 0, 0.5) 100%
                                 );
                              "
                           ></div>
                           </div>
                        </div>
                     </div>
                     <div
                        class="page-background-overlay-area"
                        style="
                           background-image: linear-gradient(
                           0.5turn,
                           rgba(0, 0, 0, 0) 40%,
                           rgba(0, 0, 0, 0.5) 100%
                           );
                        "
                     ></div>
                     </div></div></amp-story-grid-layer
               ><amp-story-grid-layer
                  template="vertical"
                  aspect-ratio="412:618"
                  class="grid-layer"
                  ><div class="page-fullbleed-area">
                     <div class="page-safe-area">
                     <div
                        style="
                           position: absolute;
                           pointer-events: none;
                           left: 9.2233%;
                           top: 56.79612%;
                           width: 81.31068%;
                           height: 31.71521%;
                           opacity: 1;
                        "
                     >
                        <div
                           id="anim-34b05cd7-ca9c-4ada-8f8c-b5557e836fa5"
                           class="animation-wrapper"
                           style="
                           width: 100%;
                           height: 100%;
                           display: block;
                           position: absolute;
                           top: 0;
                           left: 0;
                           --initial-opacity: 0;
                           --initial-transform: none;
                           "
                        >
                           <div
                           id="anim-5175b87c-7193-444c-8e71-daaf727669af"
                           class="animation-wrapper"
                           style="
                              width: 100%;
                              height: 100%;
                              display: block;
                              position: absolute;
                              top: 0;
                              left: 0;
                              --initial-opacity: 1;
                              --initial-transform: translate3d(0px, 165.41949%, 0);
                           "
                           >
                           <div
                              style="
                                 pointer-events: initial;
                                 width: 100%;
                                 height: 100%;
                                 display: block;
                                 position: absolute;
                                 top: 0;
                                 left: 0;
                                 z-index: 0;
                                 border-radius: 0.5970149253731344% 0.5970149253731344%
                                 0.5970149253731344% 0.5970149253731344% /
                                 1.0204081632653061% 1.0204081632653061%
                                 1.0204081632653061% 1.0204081632653061%;
                                 background-clip: content-box;
                                 background-color: rgba(0, 0, 0, 0.5);
                              "
                              id="el-24d63b3f-16fa-4f69-8b39-92e27c519c3d"
                           >
                              <p
                                 class="fill text-wrapper"
                                 style="
                                 white-space: pre-line;
                                 overflow-wrap: break-word;
                                 word-break: break-word;
                                 margin: 0.056716417910448146% 0;
                                 font-family: 'Montserrat', sans-serif;
                                 font-size: 0.323625em;
                                 line-height: 1.2;
                                 text-align: left;
                                 padding: 4.179104477611941% 5.3731343283582085%;
                                 color: #000000;
                                 "
                              >
                                 <span
                                 ><span style="color: #fff"
                                    >${content[4]}</span
                                 ></span
                                 >
                              </p>
                           </div>
                           </div>
                        </div>
                     </div>
                     </div>
                  </div></amp-story-grid-layer
               ><amp-story-page-outlink layout="nodisplay"
                  ><a
                     href="${params.url_post}"
                     rel="nofollow"
                     >Saiba mais</a
                  ></amp-story-page-outlink
               ></amp-story-page
               ><amp-story-page
               id="972597c0-c4ef-4eed-ba8c-862232d6185b"
               auto-advance-after="7s"
               ><amp-story-animation layout="nodisplay" trigger="visibility"
                  ><script type="application/json">
                     [{"selector":"#anim-49eb5bd8-f0f0-4425-86af-bceb353dd9de [data-leaf-element="true"]","keyframes":{"transform":["translate(14.625000041075761%, 0%) scale(1.5)","translate(0%, 0%) scale(1)"]},"delay":0,"duration":2000,"easing":"cubic-bezier(.3,0,.55,1)","fill":"forwards"}]
                  </script></amp-story-animation
               ><amp-story-animation layout="nodisplay" trigger="visibility"
                  ><script type="application/json">
                     [
                     {
                        "selector": "#anim-2338c5eb-a987-4543-acc0-de06e8e80ba8",
                        "keyframes": { "opacity": [0, 1] },
                        "delay": 0,
                        "duration": 1500,
                        "easing": "cubic-bezier(0.2, 0.6, 0.0, 1)",
                        "fill": "both"
                     }
                     ]
                  </script></amp-story-animation
               ><amp-story-animation layout="nodisplay" trigger="visibility"
                  ><script type="application/json">
                     [
                     {
                        "selector": "#anim-aa48decd-181c-45f1-9a36-0622e364ac72",
                        "keyframes": {
                           "transform": [
                           "translate3d(0px, 145.01134%, 0)",
                           "translate3d(0px, 0px, 0)"
                           ]
                        },
                        "delay": 0,
                        "duration": 1500,
                        "easing": "cubic-bezier(0.2, 0.6, 0.0, 1)",
                        "fill": "both"
                     }
                     ]
                  </script></amp-story-animation
               ><amp-story-grid-layer
                  template="vertical"
                  aspect-ratio="412:618"
                  class="grid-layer"
                  ><div class="page-fullbleed-area" style="background-color: #fff">
                     <div class="page-safe-area">
                     <div
                        style="
                           position: absolute;
                           pointer-events: none;
                           left: 0;
                           top: -9.25926%;
                           width: 100%;
                           height: 118.51852%;
                           opacity: 1;
                        "
                     >
                        <div
                           id="anim-49eb5bd8-f0f0-4425-86af-bceb353dd9de"
                           class="animation-wrapper"
                           style="
                           width: 100%;
                           height: 100%;
                           display: block;
                           position: absolute;
                           top: 0;
                           left: 0;
                           "
                        >
                           <div
                           style="
                              pointer-events: initial;
                              width: 100%;
                              height: 100%;
                              display: block;
                              position: absolute;
                              top: 0;
                              left: 0;
                              z-index: 0;
                           "
                           class="mask"
                           id="el-8851a0d2-22ad-4c0b-9de0-1bed5d33cf5f"
                           >
                           <div
                              style="
                                 position: absolute;
                                 width: 316.04939%;
                                 height: 100%;
                                 left: -44.83025%;
                                 top: 0%;
                              "
                              data-leaf-element="true"
                           >
                              <amp-img
                                 layout="fill"
                                 src="https://beneficioemfoco.com.br/wp-content/uploads/2023/03/auxilio-brasil-2.jpeg"
                                 alt="${params.title}"
                                 srcSet="https://beneficioemfoco.com.br/wp-content/uploads/2023/03/auxilio-brasil-2.jpeg 1280w,https://beneficioemfoco.com.br/wp-content/uploads/2023/03/auxilio-brasil-2-1024x576.jpeg 1024w,https://beneficioemfoco.com.br/wp-content/uploads/2023/03/auxilio-brasil-2-768x432.jpeg 768w,https://beneficioemfoco.com.br/wp-content/uploads/2023/03/auxilio-brasil-2-300x169.jpeg 300w,https://beneficioemfoco.com.br/wp-content/uploads/2023/03/auxilio-brasil-2-150x84.jpeg 150w"
                                 sizes="(min-width: 1024px) 143vh, 317vw"
                                 disable-inline-width="true"
                              ></amp-img>
                           </div>
                           <div
                              class="element-overlay-area"
                              style="
                                 background-image: linear-gradient(
                                 0.5turn,
                                 rgba(0, 0, 0, 0) 31%,
                                 rgba(0, 0, 0, 0.5) 66%
                                 );
                              "
                           ></div>
                           </div>
                        </div>
                     </div>
                     <div
                        class="page-background-overlay-area"
                        style="
                           background-image: linear-gradient(
                           0.5turn,
                           rgba(0, 0, 0, 0) 31%,
                           rgba(0, 0, 0, 0.5) 66%
                           );
                        "
                     ></div>
                     </div></div></amp-story-grid-layer
               ><amp-story-grid-layer
                  template="vertical"
                  aspect-ratio="412:618"
                  class="grid-layer"
                  ><div class="page-fullbleed-area">
                     <div class="page-safe-area">
                     <div
                        style="
                           position: absolute;
                           pointer-events: none;
                           left: 9.2233%;
                           top: 63.26861%;
                           width: 81.31068%;
                           height: 31.71521%;
                           opacity: 1;
                        "
                     >
                        <div
                           id="anim-2338c5eb-a987-4543-acc0-de06e8e80ba8"
                           class="animation-wrapper"
                           style="
                           width: 100%;
                           height: 100%;
                           display: block;
                           position: absolute;
                           top: 0;
                           left: 0;
                           --initial-opacity: 0;
                           --initial-transform: none;
                           "
                        >
                           <div
                           id="anim-aa48decd-181c-45f1-9a36-0622e364ac72"
                           class="animation-wrapper"
                           style="
                              width: 100%;
                              height: 100%;
                              display: block;
                              position: absolute;
                              top: 0;
                              left: 0;
                              --initial-opacity: 1;
                              --initial-transform: translate3d(0px, 145.01134%, 0);
                           "
                           >
                           <div
                              style="
                                 pointer-events: initial;
                                 width: 100%;
                                 height: 100%;
                                 display: block;
                                 position: absolute;
                                 top: 0;
                                 left: 0;
                                 z-index: 0;
                                 border-radius: 0.5970149253731344% 0.5970149253731344%
                                 0.5970149253731344% 0.5970149253731344% /
                                 1.0204081632653061% 1.0204081632653061%
                                 1.0204081632653061% 1.0204081632653061%;
                                 background-clip: content-box;
                                 background-color: rgba(0, 0, 0, 0.5);
                              "
                              id="el-2401ca1d-7986-455b-8beb-d0d2b0facc6b"
                           >
                              <p
                                 class="fill text-wrapper"
                                 style="
                                 white-space: pre-line;
                                 overflow-wrap: break-word;
                                 word-break: break-word;
                                 margin: 0.056716417910448146% 0;
                                 font-family: 'Montserrat', sans-serif;
                                 font-size: 0.323625em;
                                 line-height: 1.2;
                                 text-align: left;
                                 padding: 4.179104477611941% 5.3731343283582085%;
                                 color: #000000;
                                 "
                              >
                                 <span
                                 ><span style="color: #fff"
                                    >${content[5]}</span
                                 ></span
                                 >
                              </p>
                           </div>
                           </div>
                        </div>
                     </div>
                     </div>
                  </div></amp-story-grid-layer
               ><amp-story-page-outlink layout="nodisplay"
                  ><a
                     href="${params.url_post}"
                     rel="nofollow"
                     >Saiba mais</a
                  ></amp-story-page-outlink
               ></amp-story-page
               ><amp-story-page
               id="7f047b1d-7e95-47ed-b536-a99e78124076"
               auto-advance-after="7s"
               ><amp-story-animation layout="nodisplay" trigger="visibility"
                  ><script type="application/json">
                     [{"selector":"#anim-35893244-27be-49b2-a914-542c73d7c802 [data-leaf-element="true"]","keyframes":{"transform":["translate(-8.84034016487017%, 0%) scale(1.5)","translate(0%, 0%) scale(1)"]},"delay":0,"duration":2000,"easing":"cubic-bezier(.3,0,.55,1)","fill":"forwards"}]
                  </script></amp-story-animation
               ><amp-story-animation layout="nodisplay" trigger="visibility"
                  ><script type="application/json">
                     [
                     {
                        "selector": "#anim-15368552-385f-4630-8de5-675d620d40be",
                        "keyframes": { "opacity": [0, 1] },
                        "delay": 0,
                        "duration": 1500,
                        "easing": "cubic-bezier(0.2, 0.6, 0.0, 1)",
                        "fill": "both"
                     }
                     ]
                  </script></amp-story-animation
               ><amp-story-animation layout="nodisplay" trigger="visibility"
                  ><script type="application/json">
                     [
                     {
                        "selector": "#anim-be01f3a5-729c-41f1-9b5d-92e5499c1a25",
                        "keyframes": {
                           "transform": [
                           "translate3d(0px, 178.52855%, 0)",
                           "translate3d(0px, 0px, 0)"
                           ]
                        },
                        "delay": 0,
                        "duration": 1500,
                        "easing": "cubic-bezier(0.2, 0.6, 0.0, 1)",
                        "fill": "both"
                     }
                     ]
                  </script></amp-story-animation
               ><amp-story-grid-layer
                  template="vertical"
                  aspect-ratio="412:618"
                  class="grid-layer"
                  ><div class="page-fullbleed-area" style="background-color: #fff">
                     <div class="page-safe-area">
                     <div
                        style="
                           position: absolute;
                           pointer-events: none;
                           left: 0;
                           top: -9.25926%;
                           width: 100%;
                           height: 118.51852%;
                           opacity: 1;
                        "
                     >
                        <div
                           id="anim-35893244-27be-49b2-a914-542c73d7c802"
                           class="animation-wrapper"
                           style="
                           width: 100%;
                           height: 100%;
                           display: block;
                           position: absolute;
                           top: 0;
                           left: 0;
                           "
                        >
                           <div
                           style="
                              pointer-events: initial;
                              width: 100%;
                              height: 100%;
                              display: block;
                              position: absolute;
                              top: 0;
                              left: 0;
                              z-index: 0;
                           "
                           class="mask"
                           id="el-ad0ad59d-a513-4286-be6d-2279abcd8cd8"
                           >
                           <div
                              style="
                                 position: absolute;
                                 width: 266.92734%;
                                 height: 100%;
                                 left: -112.97756%;
                                 top: 0%;
                              "
                              data-leaf-element="true"
                           >
                              <amp-img
                                 layout="fill"
                                 src="https://beneficioemfoco.com.br/wp-content/uploads/2023/03/pis-pasep-omo-receber.webp"
                                 alt="${params.title}"
                                 srcSet="https://beneficioemfoco.com.br/wp-content/uploads/2023/03/pis-pasep-omo-receber.webp 1024w,https://beneficioemfoco.com.br/wp-content/uploads/2023/03/pis-pasep-omo-receber-768x512.webp 768w,https://beneficioemfoco.com.br/wp-content/uploads/2023/03/pis-pasep-omo-receber-300x200.webp 300w,https://beneficioemfoco.com.br/wp-content/uploads/2023/03/pis-pasep-omo-receber-150x100.webp 150w"
                                 sizes="(min-width: 1024px) 120vh, 267vw"
                                 disable-inline-width="true"
                              ></amp-img>
                           </div>
                           <div
                              class="element-overlay-area"
                              style="
                                 background-image: linear-gradient(
                                 0.5turn,
                                 rgba(0, 0, 0, 0) 26%,
                                 rgba(0, 0, 0, 0.5) 69%
                                 );
                              "
                           ></div>
                           </div>
                        </div>
                     </div>
                     <div
                        class="page-background-overlay-area"
                        style="
                           background-image: linear-gradient(
                           0.5turn,
                           rgba(0, 0, 0, 0) 26%,
                           rgba(0, 0, 0, 0.5) 69%
                           );
                        "
                     ></div>
                     </div></div></amp-story-grid-layer
               ><amp-story-grid-layer
                  template="vertical"
                  aspect-ratio="412:618"
                  class="grid-layer"
                  ><div class="page-fullbleed-area">
                     <div class="page-safe-area">
                     <div
                        style="
                           position: absolute;
                           pointer-events: none;
                           left: 9.2233%;
                           top: 66.50485%;
                           width: 81.31068%;
                           height: 23.94822%;
                           opacity: 1;
                        "
                     >
                        <div
                           id="anim-15368552-385f-4630-8de5-675d620d40be"
                           class="animation-wrapper"
                           style="
                           width: 100%;
                           height: 100%;
                           display: block;
                           position: absolute;
                           top: 0;
                           left: 0;
                           --initial-opacity: 0;
                           --initial-transform: none;
                           "
                        >
                           <div
                           id="anim-be01f3a5-729c-41f1-9b5d-92e5499c1a25"
                           class="animation-wrapper"
                           style="
                              width: 100%;
                              height: 100%;
                              display: block;
                              position: absolute;
                              top: 0;
                              left: 0;
                              --initial-opacity: 1;
                              --initial-transform: translate3d(0px, 178.52855%, 0);
                           "
                           >
                           <div
                              style="
                                 pointer-events: initial;
                                 width: 100%;
                                 height: 100%;
                                 display: block;
                                 position: absolute;
                                 top: 0;
                                 left: 0;
                                 z-index: 0;
                                 border-radius: 0.5970149253731344% 0.5970149253731344%
                                 0.5970149253731344% 0.5970149253731344% /
                                 1.3513513513513513% 1.3513513513513513%
                                 1.3513513513513513% 1.3513513513513513%;
                                 background-clip: content-box;
                                 background-color: rgba(0, 0, 0, 0.5);
                              "
                              id="el-4ff7ccf2-b4ba-49b0-a3f9-0a79647badcb"
                           >
                              <p
                                 class="fill text-wrapper"
                                 style="
                                 white-space: pre-line;
                                 overflow-wrap: break-word;
                                 word-break: break-word;
                                 margin: 0.056716417910448146% 0;
                                 font-family: 'Montserrat', sans-serif;
                                 font-size: 0.323625em;
                                 line-height: 1.2;
                                 text-align: left;
                                 padding: 4.179104477611941% 5.3731343283582085%;
                                 color: #000000;
                                 "
                              >
                                 <span
                                 ><span style="color: #fff"
                                    >${content[6]}</span
                                 ></span
                                 >
                              </p>
                           </div>
                           </div>
                        </div>
                     </div>
                     </div>
                  </div></amp-story-grid-layer
               ><amp-story-page-outlink layout="nodisplay"
                  ><a
                     href="${params.url_post}"
                     rel="nofollow"
                     >Saiba mais</a
                  ></amp-story-page-outlink
               ></amp-story-page
               ></amp-story
            >
         </body>
         </html>

      `),
      (this.post_title = params.title),
      (this.post_excerpt = params.excerpt),
      (this.post_status = "publish"),
      (this.comment_status = "closed"),
      (this.ping_status = "closed"),
      (this.post_password = ""),
      (this.post_name = params.title
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]/g, "")),
      (this.to_ping = ""),
      (this.pinged = ""),
      (this.post_modified = formattedDate),
      (this.post_modified_gmt = formattedDate),
      (this.post_content_filtered = ``),
      (this.post_parent = 0),
      (this.guid = params.url_post),
      (this.menu_order = ""),
      (this.post_type = "web-story"),
      (this.post_mime_type = ""),
      (this.comment_count = 0);
  }
};
