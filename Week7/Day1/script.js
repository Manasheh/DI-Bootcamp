// <!-- Async in JS -->
// <!-- Promises, Async, Await in JS -->
// <!-- Callback -->

// function getX() {
//     setTimeout(() => {
//     return 5
//     }, 2000)
// }

// function getY() {
//     return 6
// }

// function  getXY() {
//     let x = getX()
//     console.log(x)
//     let y = getY()
//     console.log(y);
//     console.log(x + y);
// }
// getXY()

//  setTimeout, setInterval 

// what is a callback

// function myCallBack() {
//     console.log('callback executed!');
// }
// function exeCallBack(func) {
//     func()
// }

// exeCallBack(myCallBack)

// function getX(callback) {
//     setTimeout(() => {
//         callback(5)
//     }, 2000)
// }
// function getY(callback) {
//     callback(6)
// }

// function getXY() {
//     getX((x) => {
//         getY((y) => {
//             console.log(x + y);
//         })
//     })
// }

// getXY()


// PROMISES 

// stages of promises 
// 1) pending
// 2) fullfill > resolve 
// 3) fullfill > rejected

// new Promise((resolve, rejected) => {

// })

// let p = new Promise((res, rej) => {
//     // res(5)
//     // rej(5)
//     setTimeout(() => {
//         // res(5)
//         rej(5) 
//     }, 2000)
// })

// console.log(p);

// p.then((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     console.log(err);
// })

// const flip = () => {
//     const coin = Math.floor(Math.random() * 2)
//     return coin === 0 ? 'head': 'tail'
// }

// // console.log(flip());
// const flipCoin = new Promise((res, rej) => {
//     setTimeout(() => {
//         const flipResult = flip()
//         if (flipResult === 'head') {
//             res(flipResult)
//         }
//         else {
//             rej('rejected flip')
//         }
//     }, 3000)
// })

// flipCoin.then((result) => {
//     console.log(result);
// })
// .catch((err) => {
//     console.log(err);
// })


// exercise promise using x and y 


// const getX = () => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res(5)
//         }, 3000)
//     })
// }

// const getY = () => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res(6)
//         }, 2000)
//     })
// }

// getX().then( x => {
//     getY().then(y => {
//         console.log(x + y);
//     })
// })

// exercise 


// const arr = [
//          { username: "aaa", email: "aaa@gmail.com" },
//          { username: "bbb", email: "bbb@gmail.com" },
//          { username: "ccc", email: "ccc@gmail.com" },
// ];

//  * 1. getDataFromServer function return a Promise with data as
//  * Array of objects from server 
  
//  * Simulate successful completion after 2 seconds
//  *
//  * 2. Call this function and log the data as an Array datatype
//  *
//  * 3. Simulate an error
//  * 
//  * 4. return to step 2, and create render function that will display
//  * 



// const getDataFromServer = () => {
//     return new Promise((res, rej) => {
//         const arr = [
//             { username: "aaa", email: "aaa@gmail.com" },
//             { username: "bbb", email: "bbb@gmail.com" },
//             { username: "ccc", email: "ccc@gmail.com" },
//         ];
//         setTimeout(() => {
//             res(arr)
//             // rej('Oops....')
//         }, 2000)
//     })
// }
// getDataFromServer().then(data => {
//     render(data)
// })
// .catch((err) => {
//     console.log(err);
// })

// const render = ((arr) => {
//     const html = arr.map(item => {
//         return `<div>
//         ${item.username} ${item.email}
//         </div>`
//     })
//     document.querySelector('#root').innerHTML = html
// }) 


//  fetch: returns a promise //
// https://jsonplaceholder.typicode.com/users  

// let returnData = fetch('https://jsonplaceholder.typicode.com/users')
// // console.log(returnData);
// returnData.then((res) => {
//     return res.json();
// })
// .then((data) => {
//     console.log(data);
// })
// .catch(err => {
//     console.log(err)
// })


// Promise static method: getting array of promises //
//Promise.all // all need to resolve and return an array if resolved
//Promise.allSettled // shows all resolve and rejected with an array and no need to catch, its automatic
//Promise.any // returns the fastest resolve promise
//Promise.race

// const promise1 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res('resolve1')
//     }, 2 * 1000)
// })

// const promise2 = new Promise((res, rej) => {
//     setTimeout(() => {
//         // res('resolve2') 
//         rej('rejected')
//     }, 2 * 1000)
// })

// const promise3 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res('resolve3')
//     }, 2 * 1000)
// })


// Promise.all([promise1, promise2, promise3])
// .then(ret => {
//     console.log(ret);
// })
// .catch(e => {
//     console.log(e);
// }) 

// Promise.allSettled([promise1, promise2, promise3])
// .then(ret => {
//     console.log(ret);
// })

// Promise.any([promise1, promise2, promise3])
// .then(ret => {
//     console.log(ret);
// })
// .catch(e => {
//     console.log(e);
// }) 


setTimeout(() => {
    console.log('1');
}, 0)

let p = Promise.resolve()
p.then(ret => {
    console.log('2');
})
console.log('3');

