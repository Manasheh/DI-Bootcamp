//  Types of data in js
// let name = value
// let str = 'text'
// let num = 5
// let bool = 4 > 5
// let void = null
// let un = undefined
// let arr = []
// let obj = {}

// variable cannot start with Number, $
// let str = `"''"`
let greeting = 'hello'
let name2 = 'Nadav'
let fullGreeting = greeting + ' ' + name2
// console.log(fullGreeting)
// console.log(greeting, name2)
let longstr = 'Hello this is menashe vaiphei, from nof hagalil, israel'

// string
// console.log(longstr.length);
// console.log(longstr.indexOf('log'))
// console.log(longstr.substring(10,15))

// let small = longstr.toLocaleLowerCase()
// // console.log(small)
// let upper = longstr.toLocaleUpperCase()
// console.log(upper)


// Number
let num2 = 15
// console.log(isNaN(num2))

let string = num2.toString()
// console.log(string)
// console.log(typeof(string))

let frac = 7.343421
// console.log(frac.toFixed(2));


//  Boolean
let bool = true
let checkBoolean = Boolean(bool)
// console.log(checkBoolean)

// comparision and strick comparision

let compare = 10 == '10'
// console.log(compare)
let compareStrick = 10 === 10
// console.log(compareStrick);

let or = 10 > 5 || 5 > 15
// console.log(or);

let and = 10 > 5 && 5 < 15
// console.log(and);

//alert
// let name4 = alert('My name is Menashe')


// prompt
// let age = prompt('How old are you?');
// alert(`You are ${age} years old!`); // You are 20 years old!


// confirm
// let isBoss = confirm("Are you the boss?");
// alert(`${isBoss} Menashe is the boss`)


// conditional statement


let cars = {
    name : 'BMW',
    year : 2022,
    seat : 5,
    color : 'black',
    owner : 'Menashe',
    thing: {
        key : 'value'
    }
}

// if (cars.year > 2020) {
//     console.log('this is a new car');
// } else if (cars.year < 2020) {
//     console.log('this is an old car');

// } else {
//     console.log('not a car')
// }


// switch statement

// switch(cars.owner) {
//     case 'Menashe':
//         console.log('True owner');
//         break
//     case 'null':
//         console.log('define owner');
//         break
//     case 'someone else':
//         console.log('not the owner');
//         break
//     default:
//         console.log('look for car owner');
// }

// LOOPS

let nums = [10, 20, 30, 40 ,50, 60]
// for (let index = 0; index < 10; index++) {
//     console.log(index);

// }
// for (let index = 10; index >= 0; index--) {
//     console.log(index); // reverse list
// }

// for (let i = 0; i < nums.length; i++) {
//     console.log(nums[i] * 2);
// }

// FOR OF LOOP

// for (let iterator of object) {

// }

// for (let num of nums) {
//     console.log(num + 1);
// }

// FOR IN LOOP, difference is give more options when it comes to using objects

// for (let key in cars) {
//     // console.log(key);
//     let element = cars[key]
//     console.log(element);
// }


// WHILE LOOPS: need to define length

// let counter = 0
// while (counter < 10) {
//     console.log(counter);
//     counter++
//     console.log(counter);

//     counter++
//     console.log(counter);

// }


// DO WHILE: even if it is false atleast do once, because it runs first and check the condition

// let counter = 20

// do {
//     console.log(counter)
//     counter++

// } while (counter < 10)

// BREAK AND CONTINUE

