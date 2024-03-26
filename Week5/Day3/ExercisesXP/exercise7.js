const allBooks = [
    {
        title: '1984',
        author: 'George Orwell',
        image: 'https://example.com/1984.jpg', 
        alreadyRead: true
    },
    {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        image: 'https://example.com/to_kill_a_mockingbird.jpg',
        alreadyRead: false
    }
];

function displayBooks() {
    const bookListSection = document.getElementById('book-list');

    allBooks.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.innerHTML = `<p style="color: ${book.alreadyRead ? 'red' : 'black'};">${book.title} written by ${book.author}</p>
                             <img src="${book.image}" style="width: 100px;">`;

        bookListSection.appendChild(bookDiv);
    });
}

displayBooks();
