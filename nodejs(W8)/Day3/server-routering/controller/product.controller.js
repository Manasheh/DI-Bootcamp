const {products} = require('../config/data')
const { _getAllProducts,
     _getProductsById,
    _createProduct,
    // _updateProduct
    _deleteProduct
} = require('../model/module.js')

const getAllProducts = (req, res) => {
    _getAllProducts()
    .then(data => {
        res.json(data)
    })
    .catch(e => console.log(e))
}


const getProductsById = (req, res) => {
    const { id } = req.params
    _getProductsById(id)
    .then((data) => {
        res.json(data)
    })
    .catch((e) => console.log(e))
    // const index = products.find(item => item.id == id)
    // if (!index) {
    //     res.status(404).json({msg: 'Not found'})
    // }
    // res.json(index)
}

const addNewProduct = (req, res) => {
    // products.push(req.body)
    // res.json(products)

    const {name, price} = req.body
    _createProduct(name, price)
    .then(data => {
        res.json(data)
    })
    .catch(e => {
        console.log(e);
    })
}


const deleteProduct = (req, res) => {
    const {id} = req.params
    // const index = data.findIndex(item => item.id == id)
    // if (index === -1) {
    //     res.status(404).json({msg: 'Not found'})
    // }
    // data.splice(index, 1)
    // res.json(data)
    _deleteProduct({ id }) // Pass the id as an object
        .then(data => {
            if (data) {
                res.json({ message: 'Product deleted' });
            } else {
                res.status(404).json({ message: 'Product not found' });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Internal server error' });
        });

}

module.exports = {
    getAllProducts,
    getProductsById,
    addNewProduct,
    deleteProduct
}