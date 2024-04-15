const express = require('express')
const { 
    getAllProducts,
    getProductsById,
    addNewProduct,
    deleteProduct

} = require('../controller/product.controller.js')
const router = express.Router();

router.get('/', getAllProducts)

router.get('/:id', getProductsById)

router.post('/', addNewProduct);

router.delete('/:id', deleteProduct)

module.exports = router
