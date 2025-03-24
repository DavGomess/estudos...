const Deposit = require('./Deposit')
const Loan= require('./Loan')
const Transfer = require('./Transfer')
const User = require('./User')

module.exports = class App {
    static #listaUsuarios = [];

    
    static encontrarUsuario(email) {
        const user = App.#listaUsuarios.find(user => user.email === email)

        return user ?? null
       
    }
    
    static criarNovoUsuario(nomeCompleto, email) {
        const usuarioExistente = App.encontrarUsuario(email)
        if(!usuarioExistente) {
           this.#listaUsuarios.push(new User(nomeCompleto, email))
        }   
}
    static deposit(email, valor) {
        const user = App.encontrarUsuario(email)
        if(user) {
            const novoDeposito = new Deposit(valor)
            user.account.fazerDeposito(novoDeposito)
        }
}
    static transfer(fromUserEmail, toUserEmail, valor) {
        const fromUser = App.encontrarUsuario(fromUserEmail)
        const toUser = App.encontrarUsuario(toUserEmail)
        if(fromUser && toUser) {
            const novaTransferencia = new Transfer(fromUser, toUser, valor)
            fromUser.account.fazerTransferencia(novaTransferencia)
            toUser.account.fazerTransferencia(novaTransferencia)
        }

    }

    static emprestimo(email, valor, numeroParcelas) {
        const user = App.encontrarUsuario(email)
        if(user) {
            const novoEmprestimo = new Loan(valor, numeroParcelas)
            user.account.fazerEmprestimo(novoEmprestimo)
        }
    }
    static mudarTaxaEmprestimo(novaTaxaJuros) {
        Loan.taxaJuros = novaTaxaJuros
    }

}

