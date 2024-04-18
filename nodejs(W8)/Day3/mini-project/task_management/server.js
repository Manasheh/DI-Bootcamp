const express = require('express')
const app = express()
const PORT = 3000
const task_router = require('./routes/route.api.js')
app.use(express.json())


app.use('/tasks', task_router)

app.listen(PORT, () => {
    console.log('Up and running on port 3000');
})