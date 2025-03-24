
module.exports = class Transfer {
    constructor(fromUser, toUser, valor) {
        this.fromUser = fromUser
        this.toUser = toUser      
        this.valor = valor
        this.dataCriacao = new Date()
    }
}

