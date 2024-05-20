"use strict";
//exercise 1
// console.log("hello world!");
//exercise 2
// let age: number = 25;
// let username: string = 'John';
// console.log("Age:", age);
// console.log("Name:", username);
//exercise 3
// let id: number | string
//exercise 4
// let checkNumber = (a:number): string => {
//     if(a > 0) {
//         return 'Positive'
//     } else if (a < 0) {
//         return 'Negative'
//     } else {
//         return 'Zero'
//     }
// }
// console.log(checkNumber(5));
// console.log(checkNumber(-5));
// console.log(checkNumber(0));
//exercise 5
// function add(a: number | string, b: number | string) {
//     if(typeof a === 'number' && typeof b === 'number') {
//         return a + b
//     } else if (typeof a === 'string' && typeof b === 'string') {
//         return a.concat(b)
//     } else {
//         throw new Error("Error types");
//     }
// }
// console.log(add('apple', 5));
//exercise 6
// function getDetails(name: string, age: number) {
//     const greetMessage: string =  `Hello ${name}, what is your ${age} ?`
//     return [name, age, greetMessage] //tuples
// }
// console.log(getDetails('Tom', 8));
//exercise 7
function createPerson(name, age) {
    return {
        name: name,
        age: age
    };
}
const person = createPerson('John', 34);
console.log('Person', person);
//the rest Ziv told us not to do.
