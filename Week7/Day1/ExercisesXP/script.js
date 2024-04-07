// Exercise 1 : Comparison 
// Create a function called compareToTen(num) that takes a number as an argument.
// The function should return a Promise:
// the promise resolves if the argument is less than or equal to 10
// the promise rejects if argument is greater than 10.

// const compareToTen = (num) => {
//     return new Promise((res, rej) => {
//         if (num <= 10) {
//             return res('resolve')
//         }
//         else {
//             return rej('rejected')
//         }
//     })
// }

// compareToTen(15)
// .then(result => console.log(result))
// .catch(err => console.log(err))


// Exercise 2 : Promises 
// Create a promise that resolves itself in 4 seconds and returns a “success” string. 

// const succ = () => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             return res('success')
//         }, 4 * 1000)
//     })
// }

// succ()
// .then(result => console.log(result))
// .catch(err => console.log(err))


// Exercise 3 : Resolve & Reject 

// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

// const promise1 = Promise.resolve(3)
// promise1.then(res => console.log(res))

// const promise2 = Promise.reject('Boo')
// promise2.catch(err => console.log(err)) 