// scope

// default parameters 
// function sum(a, b = 3) {
//     console.log(a + b);
// }

// sum(1)

// function sum(a = 1, b = 3) {
//     console.log(a + b);
// }

// sum()

// conditional operator
// let y;
// let x = 5
// if (x > 3) {
    // y = true
// }
// else {
// 
    // y = false
// }

// ternary operator, mostly use in reactjs
// let y = (x > 3) ? true: (x == 1) ? 1 : false
// let y = (x > 3) ? true: false

// template string 
// let name = 'John'
// let greeting = 'Hello,' + name;
// console.log(greeting);

// let greeting2 = `Hello ${name}`
// console.log(greeting2);


// function , function should return a value

// function sum (a, b) {
//     let arr = []
//     arr.push(a + b)
//     arr.push(a * b)
//     return arr
// }
// let ab = sum(2, 5)
// console.log(ab[0], ab[1]);

// const greeting = function(name) {
//     return `hello, ${name}`
// }
// console.log(greeting(2))

// arror function 

// const greeting = (name) => `hello, ${name}`
// console.log(greeting());

// function x() {
//     function y() {
//         return 5
//     }
//     return y
// }

// let a = x()
// console.log(a());

// function x() {
//     let a = 7
//     function y() {
//         let b = 8
//         return a + b
//     }
//     return y
// }

// let a = x()
// console.log(a());

// :what is currying, function carrying another function

// const y = (a) => {
//     return (b) => {
//         return a * b
//     }
// }
// let productVAT = y(1.17)
// // console.log(y(5)(6))
// console.log(productVAT(60));
// console.log(productVAT(100));


// :compose 

// const sum2 = (num) => num * 2
// const sum = (num) => num + 1

// const x = (a, b) => (c) => a(b(c))

// let result = x(sum2, sum)(6)
// console.log(result);



// :by value vs by references
// let a = 5;
// let b = a
// b = 6
// console.log(a);
// console.log(b);


// by references

// const arr = [1,2,3]
// let arr2 = arr
// console.log(arr);
// console.log(arr2);

// let obj = {
//     a : 10,
//     b : {
//         c: 5
//     }
// }
// let obj2 = {...obj}

// obj2.b.c = 22

// console.log(obj);
// console.log(obj2);



// :object


// let user = {}
// let post = new Object();

// user.name = 'John'
// user['email'] = 'example@gmail.com'
// // console.log(user.name, user.email);
// console.log(user['name']);

// let a = 'John'
// let user = {
//     [a] : 'John'
// }

// console.log(user);

// use only for in loop for iterating an object 

let email = 'example@gmail.com'
let name = 'john'
let user = {
    email, 
    name,
}

// console.log(user);
for (let x in user) {
    console.log(x, user[x]);
}

