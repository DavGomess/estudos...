module.exports = class Installment {
    constructor(valor, numeroParcela) {
        this.valor = valor
        this.numeroParcela = numeroParcela
        this.situacao = "pendente"
    }
} 

