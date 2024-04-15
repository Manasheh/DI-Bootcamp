const express = require('express')
const { getAllTodos,
     addTodo,
     updateTask,
     deleteTodo,
     } = require('../controller/controller.js')
const router = express.Router()

router.get('/', getAllTodos)
router.post('/add', addTodo)
router.put('/:id', updateTask)
router.delete('/:id', deleteTodo)
module.exports = router