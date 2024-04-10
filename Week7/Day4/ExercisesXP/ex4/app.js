import { TodoList } from './todo.js'

const newTodo = new TodoList()
newTodo.addTask({key: 'apple', completed: false})
newTodo.addTask({key: 'mango', completed: false})
newTodo.markTask(0)
newTodo.allTask()
