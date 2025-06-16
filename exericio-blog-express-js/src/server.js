const express = require('express')
const path = require('path')
const router = require('./router')

const app = express()

//configuração do EJS como view engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//configuração para ler dados do formulario
app.use(express.urlencoded({ extended: true }))

//configuração para servir arquivos estaticos
app.use(express.static('public'))

// adiciona as rotas do roteador na aplicação
app.use(router)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Servidor iniciado!\nRodando em http://localhost:${PORT}/`))