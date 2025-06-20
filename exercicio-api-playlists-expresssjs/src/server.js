const express = require('express')
const playlistsRouter = require('./router')
const app = express()

app.use(express.json())

app.use('/api/playlists', playlistsRouter)

const PORT = 3000

app.listen(PORT, () => console.log(`Servidor iniciado!`))