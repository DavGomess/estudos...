const App = require('./App.js');

App.criarNovoUsuario("Isaac Pontes", "isaac@email.com" )
App.criarNovoUsuario("Lucas Queiroga", "lucas@email.com" )
App.criarNovoUsuario("Juliana Conde", "juliana@email.com")

App.deposit("isaac@email.com", 100)

App.transfer("isaac@email.com", "lucas@email.com", 20)

App.mudarTaxaEmprestimo(10)
App.emprestimo("juliana@email.com", 2000, 24)

console.log(App.encontrarUsuario("isaac@email.com"))
console.log(App.encontrarUsuario("isaac@email.com").account)
console.log(App.encontrarUsuario("lucas@email.com"))
console.log(App.encontrarUsuario("lucas@email.com").account)
console.log(App.encontrarUsuario("juliana@email.com"))
console.log(App.encontrarUsuario("juliana@email.com").account)
console.log(App.encontrarUsuario("juliana@email.com").account.emprestimos[0].numeroParcelas);
