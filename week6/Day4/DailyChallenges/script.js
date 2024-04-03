let firstName = document.querySelector('#firstName')
let lastName = document.querySelector('#lastName')
let btn = document.querySelector('#btn')

btn.addEventListener('click', getName)
let arr = []
function getName (e) {
    e.preventDefault()
    arr.push({firstName: firstName.value, lastName: lastName.value})
    let str = JSON.stringify(arr)
    let p = document.createElement('p')
    p.innerHTML = str
    document.body.appendChild(p)
    firstName.value = ''
    lastName.value = ''
}





