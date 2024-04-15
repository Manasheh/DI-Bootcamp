//how to create a http servel

// const http = require('http')

// const server = http.createServer((request, response) => {
//     console.log(request.method);
//     response.end('<h1>Hello from my node server</h1>')
// })

// server.listen(5000)

// const { log } = require('console');
// const express = require('express')

// const app = express()

// app.listen(3001, () => {
//     console.log('Listening on 3001');
// })


// when i want to listen to a request app.get
// when i want to listen to a response app.post
// when i want to listen to a delete app.delete
// const users = [
//     {id: 1, name: 'John', email: 'example.com'},
//     {id: 2, name: 'Tom', email: 'example2.com'},
//     {id: 3, name: 'Ziv', email: 'example3.com'}
// ]

// app.get('/users', (req, res) => {
//     res.send(users)
// })

// const usersDetails = [
//     {id: 1, name: 'John', email: 'example.com'},
//     {id: 2, name: 'Tom', email: 'example2.com'},
//     {id: 3, name: 'Jack', email: 'example3.com'}
// ]

// app.get('/users', (req, res) => {
//     res.json(usersDetails)
// })

// app.get('/users', (req, res) => {
//     res.send('hello from express server')
// })

// const products = [
//     {id:102, name:'iPhone', price:800},
//     {id:132, name:'iPad', price:650},
//     {id:213, name:'iWatch', price:750}
//   ];

//   app.get('/products', (req, res) => {
//     res.send(products)
//   })
  
//   app.listen(3001, () => {
//     console.log('Running 3001 server');
//   })




// exercsie from config folder
//CRUD  - create, read, update, delete
// app.get - GET - retrieve data
//app.post - POST - send new data
// app.delete - DELETE - delete data
//app.put - PUT- modify data

const express = require('express')
const app = express()

const {products} = require('./config/data.js')
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.listen(3002, () => {
    console.log('run on 3002');
})


// read - get - get all products //
// starting to create an api

app.get('/api/products/', (req, res) => {
    res.json(products)
})

// Read - get - get on product according to id 
app.get('/api/products/:id', (req, res) => {
    // console.log(req.params)
    const { id } = req.params
    const product = products.find((item) => item.id == id)
    if (!product) {
        // return res.json({message: 'product not found'}) or
        // return res.status(404).send('Product not found') or
        return res.sendStatus(404)
    }
    res.status(200).send(product)
})

// Read - get - search for a product with name //
// name includes -
// ip

app.get('/api/search', (req, res) => {
    // console.log(req.query);
    const {name} = req.query;
    const filtered = products.filter((item) => {
        return item.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
    })
    // res.send('OK search')
    if (filtered.length === 0) {
        return res.status(404).json({msg: 'no product match your search'})
    }
    res.status(200).json(filtered)
})


//create POST REQUEST- to create a new product //

// we use postman for the frontend, usually backend does this without having to create frontend
// app.use(express.urlencoded({ extended: false }))
// app.use(express.json())  > need this two from npm

app.post('/api/products', (req, res) => {
    // post sends in the body
    // console.log(req.body);
    // res.json(products)
    products.push(req.body)
    res.json(products)
})


// UPDATE - PUT - modify a product //
// data -> name, price> json in body

app.put('/api/products/:id', (req, res) => {
    const {id} = req.params
    const {name, price} = req.body
    const index = products.findIndex(item => item.id == id)

    if(index === -1) {
        return res.status(404).json({msg: 'Not found'})
    }
    products[index] = {
        ...products[index],
        name, 
        price,
    }
    res.json(products)
})

app.delete('/api/products/:id', (req, res) => {
    const { id } = req.params
    const index = products.findIndex((item) => item.id = id)
    if(index === -1) {
        return res.status(404).json({msg: 'not found'})

    }
    products.splice(index, 1)
    res.json(products)
} )





