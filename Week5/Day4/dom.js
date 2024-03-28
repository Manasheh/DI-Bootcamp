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


const btns = document.querySelectorAll('#book-list .delete')
// now i have all the class with delete
// now i want to loop all the delete class, if i click anyone of it i should delte
// first i need to convert it into an array

Array.from(btns).forEach(item => {
    const li = 
})