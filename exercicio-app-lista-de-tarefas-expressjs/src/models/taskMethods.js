let lists = []

let tasks = []


const taskMethods = {
    getAllLists() {
        return lists
    },


createList(inputList) {
    const list = {
        id: lists.length + 1,
        inputList: inputList
    }
    return list
},

saveList(list) {
    lists.push(list)
},


deleteList(id) {
    lists = lists.filter(list => list.id !== parseInt(id))
},

getListById(id) {
    return lists.find(lista => lista.id == id);
},


getTasksByListId(id) {
    return tasks.filter(task => task.listId === parseInt(id));
},

addTaskToList(listId, inputTask) {
    const newTask = {
        id: tasks.length + 1,
        inputTask: inputTask,
        listId: parseInt(listId),
        selected: false

    };

    tasks.push(newTask)
    console.log(tasks)
},

toggleSelectedTask(id) {
    const task = tasks.find(task => task.id === parseInt(id))
    if(task) {
        task.selected = true
        return task
    }
}

}
module.exports = taskMethods