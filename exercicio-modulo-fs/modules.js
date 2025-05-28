import fs from "node:fs";

export function createFile(content) {
    return new Promise((resolve, reject) => {
        fs.writeFile("./meuarquivo.txt", content, (error) => {
            if (error) {
                reject("Erro ao escrever arquivo: ", error.message)
            } else {
                resolve()
            }
        })
    })
}


export function showFile() {
    return new Promise((resolve, reject) => {
        fs.readFile("./meuarquivo.txt", "utf-8", (error, text) => {
            if (error) {
                reject("Erro ao ler arquivo: ", error.message)
            } else {
                console.log(text)
                resolve()
            }
        })

    })
}

export function updateFile(newContent) {
    return new Promise((resolve, reject) => {
        fs.writeFile("./meuarquivo.txt", newContent, (error) => {
            if (error) {
                reject("Erro ao modificar arquivo: ", error.message)
            } else {
                resolve()
            }
        })
    })
}

export function deleteFile() {
    return new Promise((resolve, reject) => {
        fs.unlink("meuarquivo.txt", (error) => {
            if (error) {
                reject("Erro ao excluir o arquivo: ", error.message)
            } else {
                console.log("Arquivo excluído com sucesso!")
                resolve()
            }
        })
    })
}
