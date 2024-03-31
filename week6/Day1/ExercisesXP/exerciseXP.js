// // #1
// // function funcOne() {
// //     let a = 5;
// //     if(a > 1) {
// //         a = 3;
// //     }
// //     alert(`inside the funcOne function ${a}`);
// // } // undefined, undefined


// // // #2 
// // let a = 0;
// // function funcTwo() {
// //     a = 5;
// // }

// // function funcThree() {
// //     alert(`inside the funcThree function ${a}`);
// // }

// // // #2.1 - run in the console:
// // funcThree() // 0
// // funcTwo() // undefined
// // funcThree() // 5

// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// // #3.1 - run in the console:
// funcFour() //hello
// funcFive() // hello

// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// // #4.1 - run in the console:
// funcSix() // test
// // #4.2 What will happen if the variable is declared 
// // with const instead of let ? //test


// const a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);  // 5
// }
// alert(`outside of the if block ${a}`); // 2

// // if const than i will alert 5 and 2





// Exercise 2 : Ternary Operator
// Transform the winBattle() function to an arrow function.
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// Console.log the experiencePoints variable.

// winBattle = () => {
//     return true;
// }

// let experiencePoints = winBattle ? 10 : 1
// console.log(experiencePoints); 

// Exercise 3 : Is It A String ?
// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false
// Check out the example below to see the expected output

// const checkString = (isStr) => {
//     if (typeof isStr === 'string') {
//         return true
//     } 
//     else {
//         return false
//     }
// }

// console.log(checkString(1,2,3))


// Exercise 4 : Find The Sum
// Instructions
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

// const sum = (a, b) =>  a + b
// console.log(sum(1,1));

// Exercise 5 : Kg And Grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
// Then, use function expression and invoke it.
// Write in a one line comment, the difference between function declaration and function expression.
// Finally, use a one line arrow function and invoke it.

// function inGrams(kilos) {
//     return kilos * 1000 
// }
// console.log(inGrams(1));
// const inGramsExpression = function (kilo) {
//     return kilo * 1000
// }
// console.log(inGramsExpression(2))

// const inGram = kilo => `${kilo * 1000} grams`
// console.log(inGram(3))

// function declaration use the word function while expression store function in a variable


// Exercise 6 : Fortune Teller
// Instructions
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."


// (function(num_children, name, location, jobTitle) {
//     document.getElementById('fortune-teller').innerHTML = `You will be a ${jobTitle} in ${location} and married to ${name} with ${num_children} kids`;
// })('2', 'Grace','Tel aviv','developer');


// Exercise 7 : Welcome
// Instructions
// John has just signed in to your website and you want to welcome him.

// Create a Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.


// (function(name) {
//     const div = document.createElement('div')
//     const img = document.createElement('img')
//     img.classList.add('img')
//     img.src = 'https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_1280.png'
//     img.style.width = '40px'
//     img.style.height = '40px'
//     const navBar = document.getElementById('navBar')
//     div.innerText = name
//     navBar.appendChild(div)
//     navBar.appendChild(img)
// })("Elvis")

// Exercise 8 : Juice Bar
// Instructions
// You will use nested functions, to open a new juice bar.

// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.


// function makeJuice(beverageSize) {
//     const ingredients = []
//     function addIngredients(a, b, c) {
//         const span = document.createElement('span')
//         span.innerText = `The client wants a ${beverageSize} juice, containing ${a}, ${b}, ${c}`
//         document.body.appendChild(span)
//         ingredients.push(a, b, c)
//     }
//     function displayJuice() {
//         const span = document.createElement('span')
//         span.innerText = `The client wants a ${beverageSize} juice, containing ${ingredients[0]}
//         , ${ingredients[1]}, ${ingredients[2]}`
//         document.body.appendChild(span)

//     }
//     addIngredients('banana', 'pineapple', 'grapes')
//     displayJuice()
//     console.log(ingredients);
// }

// makeJuice('medium')

