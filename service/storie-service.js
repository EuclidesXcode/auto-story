module.exports = class StorieService {

    static createStorie = async (dto) => {

        try {

            console.log("Entrou no Service com o dto: ", dto)

            const result = "enviar para o banco ou montar uma estrutura e enviar!"

        } catch(err) {
            console.error("Error, storie not created: ", err)
        }

    }

}