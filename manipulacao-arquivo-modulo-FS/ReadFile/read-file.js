const fs = require('node:fs')

fs.readFile("../WriteFile/arquivo.txt", "utf-8", (error, data) => {
    if (error) {
        console.log("Erro ao ler o arquivo: ", error.message)
        return
    }
    
    const entries = data.split(",")
    console.log(entries)
    entries.forEach((entry) => console.log(entry))
})