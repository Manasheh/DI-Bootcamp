const bookModel = require('../models/book_model.js');

const getAllBooks = (req, res) => {
    bookModel.getAllBooks()
        .then(books => res.json(books))
        .catch(err => {
            console.error('Error fetching all books:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        });
};

const getBookById = (req, res) => {
    const bookId = req.params.bookId;
    bookModel.getBookById(bookId)
        .then(book => {
            if (book) {
                res.json(book);
            } else {
                res.status(404).json({ error: 'Book not found' });
            }
        })
        .catch(err => {
            console.error('Error fetching book by ID:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        });
};

const createBook = (req, res) => {
    const { title, author, publishedYear } = req.body;
    const book = { title, author, publishedYear };

    bookModel.createBook(book)
        .then(newBook => res.status(201).json(newBook))
        .catch(err => {
            console.error('Error creating book:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        });
};

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
};

