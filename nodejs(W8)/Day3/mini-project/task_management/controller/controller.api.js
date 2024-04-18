const express = require('express')
const data = require('../config/file.js')
const { 
    _getTasks,
    _getTaskById,
    _addTask,
    _addTaskById,
    _deleteTaskById,
    _updateTask
} = require('../model/model.api.js')

const getTasks = (req , res) => {
    _getTasks()
    .then(data => res.json(data))
    .catch(err => console.log(err))
} 

const getTaskById =(req, res) => {
    const { id } = req.params
    _getTaskById(id)
    .then( data => res.json(data))
    .catch(e => console.log(e))
}

const addTask =(req, res) => {
    const { task } = req.body
    if(!task || task.trim().length === 0) {
        return res.json({msg: 'Invalid'})
    }
    _addTask(task)
    .then(data => res.json(data))
    .catch(e => console.log(e))
}

const addTaskById =(req, res) => {
    const { id } = req.params
    const {task} = req.body
    _addTaskById(id, task)
    .then(data => res.json(data))
    .catch(e => console.log(e))
}

const deleteTask = (req, res) => {
    const { id } = req.params
    _deleteTaskById(id)
    .then(data => res.json(data))
    .catch(e => console.log(e))
}

const updataTask = (req, res) => {
    const { id } = req.params
    const { task } = req.body
    _updateTask(id, task)
    .then(data => res.json(data))
    .catch(e => console.log(e))
}

module.exports = {
    getTasks,
    getTaskById,
    addTask,
    addTaskById,
    deleteTask,
    updataTask
}