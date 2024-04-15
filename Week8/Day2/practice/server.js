const express = require('express')
// const {products, users}  = require('./data.js');
const product_router = require('./route/product.route.js')
// const { param } = require('../server-routering/routes/products.route.js');
const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// console.log(data);
const PORT = 3000
app.listen(PORT, () => {
    console.log('Listening on port 3000')
})

app.use('/products', product_router)









