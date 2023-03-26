const StorieDTO = require("../dto/storie-dto")
const StorieService = require("../service/storie-service")

module.exports = class StorieController {

    static async validade(params) {

        try{

            console.log("params: ", params)

            // if(!params.id && !params.title && !params.description && !params.url && !params.cover && !params.createdAt) throw new Error("Parameters not found")

            const storieDTO = new StorieDTO.mountStoryHTML(params)

            console.log("Entrou no DTO e retornou: ", storieDTO)

            const result = await StorieService.cresteStorie(storieDTO)
            

            if(!result) throw new Error("Error: result is empty")

            return result

        } catch(err) {

            console.error("Erro na validação dos parametros: ", err)
            
        }
    }
}