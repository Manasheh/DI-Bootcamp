const btn = document.querySelector('#btn')
const userInput = document.querySelector('#user-input')
const todoContainer = document.querySelector('#todo-container')
const listContainer = document.querySelector('#list-container')
const listUl = document.querySelector('#list')
const deleteContainer = document.querySelector('#delete-container')
const iconUl = document.getElementById('iconUl')



const iconCheck = 'fa-check'
const iconDelete = 'fa-trash'
btn.addEventListener('click', function (e) {
    e.preventDefault()
    if (userInput.value.trim() === '') {
        return
        }
    const todoLi = document.createElement('li')
    const iconLi = document.createElement('li')
    const currentInput = userInput.value.toUpperCase()
    // const delteLi = document.createElement('li')
    const iconOne = document.createElement('i')
    const iconTwo = document.createElement('i')
    iconOne.classList.add('fas', 'fa', iconCheck)
    iconTwo.classList.add('fas', 'fa', iconDelete)
    iconLi.appendChild(iconOne)
    iconLi.appendChild(iconTwo)
    iconUl.appendChild(iconLi)
    todoLi.textContent = currentInput
    listUl.appendChild(todoLi)
    userInput.value = ''        
})





