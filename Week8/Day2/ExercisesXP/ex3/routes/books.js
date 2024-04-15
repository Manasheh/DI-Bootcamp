const express = require('express')

const router = express.Router()
const books = []
router.get('/', (req, res) => {
    res.json(books)
})

router.use(express.json());

router.post('/', (req, res) => {
    const { name } = req.body
    if(!name) {
        res.status(404).json({msg: 'Name require'})
    }
    const newBook = {
        id : books.length + 1,
        name : name
    }
    books.push(newBook)
    res.json(books)
})

router.put('/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body
    const index = books.findIndex(item => item.id == id)
    if(!index) {
        return res.status(404).json({msg: 'Book not found'})
    }
    books[index].name = name
    res.json(books)
})

router.delete('/:id', (req, res) => {
    const {id} = req.params
    const index = books.findIndex(item => item.id == id)
    if(index === -1) {
        return res.status(404).json({msg: 'Item not found'})
    }
    books.splice(index, 1)
    res.json(books)
})


module.exports = router;
