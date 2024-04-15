const todos = [{id : 1, text: 'eat'},
]

const getAllTodos = (req, res) => {
    res.send(todos)
}

const addTodo = (req, res) => {
    const { text } = req.body
    if(!text) {
        return res.status(404).json({msg: 'Text is require'})
    }
    const newTodo = {
        id: todos.length + 1,
        text
    }
    todos.push(newTodo)
    res.status(200).json(newTodo)
}

const updateTask = (req, res) => {
    const  id  = req.params.id 
    const { text } = req.body
    const index = todos.findIndex(item => item.id == id)
    if (index === -1) {
        return res.status(404).json({msg: 'Task not found'})
    }
    todos[index].text = text
    res.json(todos[index])
}

const deleteTodo = (req, res) => {
    const id = req.params.id;
    const index = todos.findIndex(todo => todo.id === id);
    if (index === -1) {
        return res.status(404).json({ message: 'To-do item not found' });
    }
    todos.splice(index, 1);
    res.status(200).send();
}


module.exports = {
    getAllTodos,
    addTodo,
    updateTask,
    deleteTodo
}