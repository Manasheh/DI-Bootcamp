const express = require('express')
const router = express.Router()

const {getAllData,
    getDataById,
    addData,
    addDataById,
    deleteData

} = require('../controller/controller.js')

router.get('/', getAllData)
router.get('/:id', getDataById)
router.post('/', addData)
router.post('/:id', addDataById)
router.delete('/:id', deleteData)

module.exports = router