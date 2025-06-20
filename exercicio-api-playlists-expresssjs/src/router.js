const express = require('express')
const playlistController = require('./controller/playlists-controller')

const playlistsRouter = express.Router()

playlistsRouter.get('/', playlistController.index)
playlistsRouter.get('/:id', playlistController.show)
playlistsRouter.post('/', playlistController.save)
playlistsRouter.put('/:id', playlistController.updaate)
playlistsRouter.delete('/:id', playlistController.delete)


module.exports = playlistsRouter