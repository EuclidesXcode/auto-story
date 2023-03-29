class Styles {
  constructor() {
    this.nomeDaClassCSS = {
      marginTop: "10px",
      marginBottom: "10px",
    };

    this.ampAutoStory = {
      backgroudColor: "#ffffff",
    }

    this.bodyHeader = {
      webkitAnimation: `-amp-start 8s steps(1, end) 0s 1 normal both`,
      mozAnimation: `-amp-start 8s steps(1, end) 0s 1 normal both`,
      msAnimation: `-amp-start 8s steps(1, end) 0s 1 normal both`,
      animation: `-amp-start 8s steps(1, end) 0s 1 normal both`,
    }

    ampStoryPage = {
        backgroundColor: "#131516"
    }

    ampStoryGridLayer = {
        overflow: "visible"
    }


    this.pageFullbleedArea,
    this.pageBackgroundOverlayArea = {
        position: "absolute",
        overflow: "hidden",
        width: "100%",
        left: "0",
        height: "calc(1.1851851851851851 * 100%)",
        top: "calc((1 - 1.1851851851851851) * 100% / 2"
    }

    this.elementOverlayArea = {
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "0",
        left: "0"
    }

    this.pageSafeArea = {
        overflow: "visible",
        position: "absolute",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        width: "100%",
        height: "calc(0.84375 * 100%)",
        margin: "auto 0"
    }

    this.mask = {
        position: "absolute",
        overflow: "hidden"
    }

    this.fill = {
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        margin: "0"
    }

    ampStoryGridLayer.alignBottom = {
        alignContent: "end",
        padding: "0"
    }

    this.captionsArea = {
        padding: "0 32px 0"
    }

    ampStoryCaptions = {
        marginBottom: "16px",
        textAlign: "center"
    }

    



    //Animations
    
    //Fonts
    this.normalFontWeight = {
        //h1, h2 e h3
        fontWeight: "normal"
    };
    
    this.globalFonts = {
        fontFamily: `-apple-system, 
                    BlinkMacSystemFont, 
                    "Segoe UI", 
                    Roboto, 
                    Oxygen-Sans, 
                    Ubuntu, 
                    Cantarell, 
                    "Helvetica Neue", 
                    sans-serif;`
    
    };

  }

  static getBodyHeader() {
    return this.bodyHeader;
  }
}

module.exports = Styles;
