// const bookList = document.querySelector('#book-list')
// console.log('the parent node is:', bookList.parentNode);
// console.log('the parent node is:', bookList.parentElement.parentElement);

// console.log(bookList.children);

// console.log(bookList.nextSibling);
// console.log(bookList.nextElementSibling);

// console.log(bookList.previousSiblingSibling);
// console.log(bookList.previousSiblingElementSibling);

// bookList.previousElementSibling.querySelector('p').innerHTML += '<br/> too cool'


// const h2 = document.querySelector('#book-list h2')
// h2.addEventListener('click', function(e) {
//     console.log(e.target);
//     console.log(e);
// })

// var btns = document.querySelectorAll('#book-list .delete')

// Array.from(btns).forEach(function(btn) {
//     btn.addEventListener('click', function(e) {
//         const li = e.target.parentElement
//         li.parentNode.removeChild(li)
//     })
// })


// delete books
const list = document.querySelector('#book-list ul')
list.addEventListener('click', function(e) {
    if (e.target.className == 'delete') {
        const li = e.target.parentElement
        ul.removeChild(li)
    }
})

//  add books





