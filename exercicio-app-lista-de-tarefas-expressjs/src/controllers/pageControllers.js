const taskMethods = require('../models/taskMethods')

module.exports = {

renderIndex: (req,  res) => {
    res.render('index')
},

renderCreateList: (req, res) => {
    res.render('createList');
},

renderAllList: (req, res) => {
    const lists = taskMethods.getAllLists()
    res.render('allList', { lists });
},

createList: (req, res) => {
    const  { inputList } = req.body

    const list = taskMethods.createList(inputList)
    taskMethods.saveList(list)

    res.redirect('/allList')
},

deleteList: (req, res) => {
    const { id } = req.params

    taskMethods.deleteList(id)

    res.redirect('/allList')
},

renderDetailList: (req, res) => {
    const { id } = req.params;

    const tasks = taskMethods.getTasksByListId(id); 
    const list = taskMethods.getListById(id); 

    res.render('detailList', { tasks, list:list });
},

renderAddTask: (req, res) => {
    const { id } = req.params;
    const { inputTask } = req.body;

    taskMethods.addTaskToList(id, inputTask);

    res.redirect(`/detailList/${id}`)
},

renderToggleSelected: (req, res) => {
    const { id } = req.params
    const task = taskMethods.toggleSelectedTask(id)
    res.redirect(`/detailList/${task.listId}`)
}
}