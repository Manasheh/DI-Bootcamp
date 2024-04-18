const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const {
    toGet,
    toRegister,
    login,
} = require('../controller/controllers.js')

router.get('/', toGet)
router.post('/', toRegister)
router.post('/login', login)

module.exports = router