// process.stdout.write("Olá, mundo!\n");

// process.stdin.on("data", (data) => {
//     process.stdout.write(`você digitou: ${ data}`)
// })

const readline = require("node:readline");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.on("line", (input) => {
    console.log(`você digitou: "${ input}"`)
})

rl.question("qual é o seu nome? ", (answer) => {
    console.log(`olá, ${answer}!\n`)
    rl.close()
})

rl.on("close", () => {
    console.log("saindo...")

    process.exit(0)
})