const { db } = require('../config/file.js')

const _getTasks = () => {
    return db('tasks').select('id', 'task').orderBy('id')
}

const _getTaskById = (id) => {
    return db('tasks').select('id', 'task').where({id})
}

const _addTask = (task) => {
    return db('tasks').insert({task}, ['id', 'task'])
}

const _addTaskById = (id, task) => {
    return db('tasks').insert({id, task}, ['id', 'task'])
}
const _deleteTaskById =(id) => {
    return db('tasks').where({id}).del()
}

const _updateTask = (id, updatedTask) => {
    return db('tasks').where({id}).update(updatedTask)
}
module.exports = {
    _getTasks,
    _getTaskById,
    _addTask,
    _addTaskById,
    _deleteTaskById,
    _updateTask
}