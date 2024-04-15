const express = require('express')
const appRouter = require('./routes/routes')

const app = express()
const PORT = 5000
app.listen(PORT, () => {
    console.log('Up and running on port 5000');
})



app.use('/', appRouter)