import express from 'express'
const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
const books = [
    {
        id: 1,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        publishedYear: 1960
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        publishedYear: 1949
    },
    {
        id: 3,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        publishedYear: 1925
    }
];

const port = 5001
app.listen(port, () => {
    console.log('Listening to port 5001');
})

app.get('/api/books', (req, res) => {
    res.json(books)
})
app.get('/api/books/:bookId', (req, res) => {
    const { bookId } = req.params
    const book = books.find((item) => item.id == bookId)
    if (!book) {
        res.status(404).json({ msg: 'Book not found' })
    }
    res.status(200).json(book)
})

app.post('/api/books', (req, res) => {
    const { title, author, publishedYear } = req.body
    const id = books.length + 1
    const newBook = { id, title, author, publishedYear }
    books.push(newBook)
    console.log(newBook);
    res.status(201).json(newBook)
})

const PORT = 5002
app.listen(PORT, () => {
    console.log('Server is running on port 5002');
})