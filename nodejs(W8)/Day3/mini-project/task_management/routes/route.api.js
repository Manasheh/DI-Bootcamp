const express = require('express')
const router = express.Router()
const {
    getTasks,
    getTaskById,
    addTask,
    addTaskById,
    deleteTask,
    updataTask
} = require('../controller/controller.api.js')


router.get('/', getTasks)

router.get('/:id', getTaskById)

router.post('/', addTask)

router.post('/:id', addTaskById)

router.put('/:id', updataTask)

router.delete('/:id', deleteTask)

module.exports = router