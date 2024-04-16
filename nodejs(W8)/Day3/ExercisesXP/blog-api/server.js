const express = require('express')
const app = express()

const PORT = 3000
const data_router = require('./routes/route.js')
app.use(express.json())
app.use('/', data_router)
app.listen(PORT, () => {
    console.log(`Up and running on port ${PORT}`);
})
