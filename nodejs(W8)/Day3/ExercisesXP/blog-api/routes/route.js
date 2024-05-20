const express = require('express')
const router = express.Router()

const {getAllData,
    getDataById,
    addData,
    addDataById,
    deleteData

} = require('../controller/controller.js')

router.get('/', getAllData) //1
router.get('/:id', getDataById) //2
router.post('/', addData) //3
router.post('/:id', addDataById)
router.delete('/:id', deleteData)

module.exports = router


localhost:3000/3
method : get