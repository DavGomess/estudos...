const Account = require('./Account.js');

module.exports = class User {
    constructor(nomeCompleto, email) {
        this.nomeCompleto = nomeCompleto;
        this.email = email;
        this.account = new Account(this);
    }
}

