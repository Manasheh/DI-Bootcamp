const express = require('express')
// const { users } = require('../server/config/data')#
const { getAllUsers } = require('../controllers/users.controller')

const router = express.Router()

router.get('/users', getAllUsers)

module.exports = router
