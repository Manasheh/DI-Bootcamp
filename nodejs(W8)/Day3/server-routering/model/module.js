const { db } = require('../config/data.js')

const _getAllProducts = () => {
    return db('products').select('id', 'name', 'price').orderBy('id')
    // returns a promise
}

const _getProductsById = (id) => {
    return db('products').select('id', 'name', 'price').where({id})
}

const _createProduct = (name, price) => {
    return db("products").insert({name, price}, ['id', 'name', 'price'])
}

// const _updateProduct = (name, price) => {
//     return db('products').update({name, price},['id', 'name', 'price'])
// }
const _deleteProduct = ({ id }) => {
    return db('products').where({ id }).del();
}



module.exports = {
    _getAllProducts,
    _getProductsById,
    _createProduct,
    // _updateProduct
    _deleteProduct
}