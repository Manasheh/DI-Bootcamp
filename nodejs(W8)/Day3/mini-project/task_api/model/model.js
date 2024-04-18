const { db } = require('../config/data.js')

const _toGet = () => {
    return db('users').select('id', 'username', 'password')
}

const _toRegister = (username, password) => {
    return db('users').insert({username, password}, ['id', 'username', 'password'])
}

const _toGetUserByName = (username) => {
    return db('users').select('id', 'username', 'password').where({ username });
}

module.exports = {
    _toGet,
    _toRegister,
    _toGetUserByName
}