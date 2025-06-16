const express = require('express')
const postController = require('./controllers/postController')
const adminController = require('./controllers/adminController')
const router = express.Router()

//rota para a pagina inicial do blog
router.get('/', postController.index)

//rota para exibir um post especifico
router.get('/posts/:id', postController.show)

//rotas para paginas administrativas
router.get('/admin', adminController.showAdminPage)
router.get('/admin/create', adminController.showCreatePage)
router.post('/admin/create', adminController.createPost)
router.get('/admin/edit/:id', adminController.showEditPage)
router.post('/admin/update/:id', adminController.updatePost)
router.post('/admin/delete/:id', adminController.deletePost)


module.exports = router