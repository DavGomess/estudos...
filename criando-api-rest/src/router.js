const express = require('express')
const gameController = require('./controller/games-controller')

const router = express.Router()

router.get('/', (req, res) => {
    res.json({ message: 'Hello, world!' })
})

router.get('/games', gameController.index)
router.get('/games/:id', gameController.show)
router.post('/games', gameController.save)
router.post('/games/:id/genres', gameController.addGenre)
router.put('/games/:id', gameController.update)
router.delete('/game/:id', gameController.delete)
router.delete('/games/:id/genres/:name', gameController.removeGenre)

module.exports = router