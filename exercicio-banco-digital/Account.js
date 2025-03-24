module.exports = class Account {
    #saldo
    constructor(user) {
        this.dono = user;
        this.#saldo = 0;
        this.depositos = [];
        this.emprestimos = [];
        this.transferencias = [];
    }


    get saldo() {
        return this.#saldo
    }
    fazerDeposito(deposit) {
        this.#saldo += deposit.valor
        this.depositos.push(deposit)
    }

    fazerEmprestimo(Loan) {
        this.#saldo += Loan.value
        this.emprestimos.push(Loan)
    }    

    fazerTransferencia(Transfer) {
        if(Transfer.toUser.email === this.dono.email) {
            this.#saldo += Transfer.value
            this.transferencias.push(Transfer)
        }else if(Transfer.fromUser.email === this.dono.email) {
            this.#saldo -= Transfer.value
            this.transferencias.push(Transfer)
        }
}

}
