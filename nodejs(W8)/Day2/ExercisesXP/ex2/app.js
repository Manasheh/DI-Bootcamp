const express = require('express')
const todoRouter = require('./routes/todos.js')
const app = express()
const PORT = 3001
app.use(express.json())


app.use('/allTodos', todoRouter)
app.listen(PORT, () => {
    console.log('Listening in port 3001');
})