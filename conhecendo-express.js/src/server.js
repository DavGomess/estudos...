const express = require("express");

const server = express()

server.get('/', (request, response) => {
    response.send("Servidor express funcionando!\n você está na página inicial.")
})

server.get('/artigos', (req, res) => {
    res.send("você está na página 'Artigos!'")
})

const PORT = 3000

server.listen(PORT, () => {
    console.log(`Servidor Express iniciado em http://localhost:${PORT}`)
})