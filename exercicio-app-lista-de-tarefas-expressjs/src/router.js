const express = require('express');
const router = express.Router();
const pageController = require('./controllers/pageControllers');

router.get('/', pageController.renderIndex);
router.get('/createList', pageController.renderCreateList);
router.get('/allList', pageController.renderAllList)
router.post('/listDelete:id', pageController.deleteList)
router.post('/addList', pageController.createList)
router.get('/detailList/:id', pageController.renderDetailList)
router.post('/addTask/:id', pageController.renderAddTask)
router.post('/completedTask/:id', pageController.renderToggleSelected)


module.exports = router