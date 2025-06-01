const os = require("node:os");

const plataforma = os.platform()
console.log("Plataforma do SO: ", plataforma)

console.log("----------------------------------------------")

const arquitetura = os.arch()
console.log("Arquitetura do SO: ", arquitetura)

console.log("----------------------------------------------")

const processadores = os.cpus()
console.log("Informações da CPU:", processadores[0])

console.log("----------------------------------------------")

const memoria = os.freemem()
console.log("Total de memória do PC:", (memoria / 1024 / 1024 / 1024).toFixed(2), "GB")