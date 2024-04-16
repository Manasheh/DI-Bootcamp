const express = require('express')
const data = require('../config/data.js')
const { _getAllData,
     _getData,
     _addData,
     _addDataById,
     _deleteData
     } = require('../model/model.js')

const getAllData = (req, res) => {
    _getAllData()
    .then(data => {
        res.json(data)
    })
    .catch(e => console.log(e))
}
const getDataById = (req, res) => {
    const   { id }   = req.params
    _getData(id)
    .then(data => res.json(data))
    .catch(e => console.log(e))
}

const addData = (req, res) => {
    const {title, content} = req.body
    _addData(title, content)
    .then(data => {
        res.json(data)
    })
    .catch(e => {
        console.log(e);
    })
}

const addDataById = (req, res) => {
    const { id } = req.params
    const { title, content } = req.body
    _addDataById(id, title, content)
    .then(data => res.json(data))
    .catch(e => console.log(e))
}

const deleteData = (req, res) => {
    const { id } = req.params;
    _deleteData(id)
        .then(() => res.status(204).send())
        .catch(e => console.log(e));
}

module.exports = {
    getAllData,
    getDataById,
    addData,
    addDataById,
    deleteData
}