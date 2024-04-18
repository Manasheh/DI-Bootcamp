const express = require('express')
const app = express()
const PORT = 5000
const taskRouter = require('./routes/routes.js')
app.use(express.json())

app.use('/register', taskRouter)

app.listen(PORT, () => {
    console.log('Listening at port 5000');
})
