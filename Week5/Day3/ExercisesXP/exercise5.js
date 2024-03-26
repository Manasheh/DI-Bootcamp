/* 
Add the code above, to your HTML file

Using Javascript:
Retrieve the div and console.log it
Change the name “Pete” to “Richard”.
Delete the second <li> of the second <ul>.
Change the name of the first <li> of each <ul> to your name. (Hint : use a loop)

Using Javascript:
Add a class called student_list to both of the <ul>'s.
Add the classes university and attendance to the first <ul>.

Using Javascript:
Add a “light blue” background color and some padding to the <div>.
Do not display the <li> that contains the text node “Dan”. (the last <li> of the first <ul>)
Add a border to the <li> that contains the text node “Richard”. (the second <li> of the <ul>)
Change the font size of the whole body.

Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
*/

div = document.querySelector('div')
if (div.style.backgroundColor = 'lightblue') {
    alert('Hello x and y')
}

peteEle = document.querySelector('ul li:nth-child(2)')
peteEle.textContent = 'Richard'

const secondEle = document.querySelectorAll('ul')[1]
const secondList = secondEle.querySelectorAll('li')[1]
secondList.remove()

const list = document.getElementsByClassName('list')
Array.from(list).forEach(element => {
    element.firstElementChild.textContent = 'Menashe'
});

const allUl = document.querySelectorAll('ul')
allUl.forEach(ul => {
    ul.classList.add('student_list')
})

const firstUnorder = document.querySelector('ul')
firstUnorder.classList.add('university', 'attendence')

secondEle.lastElementChild.style.display = 'none'

peteEle.style.border = '2px solid red'

document.body.style.fontSize = '30px'
