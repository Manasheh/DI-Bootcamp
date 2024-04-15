const express = require('express')
const app = express()
const bookRouters = require('./routes/books.js')
const PORT = 5001

app.use('/books', bookRouters)
app.listen(PORT, () => {
    console.log('Up and running in 5001');
})