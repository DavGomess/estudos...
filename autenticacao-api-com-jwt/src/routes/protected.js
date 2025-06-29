const express = require('express')
const authMiddleware = require('../middleware/auth-middleware')

const protectedRouter = express.Router()

protectedRouter.get('/dashboard', authMiddleware, (req, res) => {
    const username = req.authenticatedUser.username
    res.json({ message: `Voce esta na area protegida. bem-vindo(a), ${username}!` })
})


module.exports = protectedRouter