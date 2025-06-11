const express = require('express')
const path = require('node:path')

const app = express()

const registeredEmails = []

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    const title = 'Newsletter'

    res.render('index', { title })
})


app.post('/register', (req, res) => {

    const email = req.body.email
    if (email) {
        registeredEmails.push({ email })
        res.redirect('/sucess')
    }else {
        res.redirect('/')
    }
})

app.get('/sucess', (req, res) => {
    res.render('sucess')
})

app.get('/usuarios', (req, res) => {
    res.render('users', { users: registeredEmails })
})

app.post('/delete', (req, res) => {
    const emailDeletado = req.body.email
    const index = registeredEmails.findIndex(user => user.email === emailDeletado)
    if (index !== -1) {
        registeredEmails.splice(index, 1)
    }

    res.redirect('/usuarios')
})

const PORT = 3000

app.listen(PORT, () => {
    console.log("servidor iniciado!")
})