const { db } = require('../config/data.js')

const _getAllData = () => {
    return db('posts').select('id', 'title', 'content').orderBy('id')
}

const _getData = (id) => {
    return db('posts').select('id','title', 'content').where({id})
}

const _addData = (title, content) => {
    return db("posts").insert({title, content}, ['id', 'title', 'content'])
}

const _addDataById = (id, title, content) => {
    return db("posts").insert({id, title, content}, ['id', 'title', 'content'])
}

const _deleteData = (id) => {
    return db('posts').where({id}).del()
}

module.exports = {
    _getAllData,
    _getData,
    _addData,
    _addDataById,
    _deleteData
}

