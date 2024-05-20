const express = require('express')
const app = express()
const data_router = require('./routes/route.js')

const PORT = 3000
app.use(express.json())
app.use('/', data_router)
app.listen(PORT, () => {
    console.log(`Up and running on port ${PORT}`);
})


// server.js > routes.js > controller.js > model.js> update/delete/get/post > database