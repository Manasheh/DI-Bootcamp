const express = require('express');
const app = express();
const bookRoutes = require('./routes/book_routes.js');

const PORT =  5000;

app.use(express.json());

app.use('/api/books', bookRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
