const db = require('../config/book_config.js');

const getAllBooks = () => {
    return db('books').select('id', 'title', 'author', 'publishedYear').orderBy('id');
};

const getBookById = (bookId) => {
    return db('books').where('id', bookId).first();
};

const createBook = (book) => {
    return db('books').insert(book).returning('*');
};

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
};
