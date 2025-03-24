
const Installment = require("./Installment.js");

module.exports = class Loan {
    static #taxaJuros = 1.05
    
    constructor(valor,  numeroParcelas) {
        this.valor = valor
        this.numeroParcelas = Array.from({ length: numeroParcelas }, (_, i) =>
            new Installment((this.valor * Loan.#taxaJuros) / numeroParcelas, i + 1)
        )
        
        this.datacriacao = new Date()
    }
   
    static get taxaJuros() {
        return Loan.#taxaJuros
    }

    static set taxaJuros(novaTaxaJuros) {
        Loan.#taxaJuros = 1 + (novaTaxaJuros / 100)
    }
} 

 