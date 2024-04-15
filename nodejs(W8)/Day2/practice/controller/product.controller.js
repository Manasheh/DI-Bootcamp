const {products} = require('../data.js')

const getAllProducts = (req, res) => {
    res.json(products)
}

const getProductsById = (req, res) => {
    const { id } = req.params
    const index = products.find(item => item.id == id)
    if (!index) {
        res.status(404).json({msg: 'Not found'})
    }
    res.json(index)
}

const addNewProduct = (req, res) => {
    products.push(req.body)
    res.json(products)
}

const deleteProduct = (req, res) => {
    const {id} = req.params
    const index = data.findIndex(item => item.id == id)
    if (index === -1) {
        res.status(404).json({msg: 'Not found'})
    }
    data.splice(index, 1)
    res.json(data)
}

module.exports = {
    getAllProducts,
    getProductsById,
    addNewProduct,
    deleteProduct
}