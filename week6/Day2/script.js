// let b = 3, d = b, u = b;

// const tree = ++d * d*b * b++ + 
// + --d+ + +b-- +
// + +d*b + 
// u

// 4 * 4 * 3 * 3 +
// 3 + 4 +
// 3 * 3 +
// 3 // 163

// all loop we have

// let arr = ['John', 'Mary', 'Dan', 'Anne']
// const len = arr.length // more efficient
// for (let index = 0; index < len; index++) {
//     const element = arr[index];
//     console.log(element, index);
// }

// for (x in arr) {
//     console.log(x, arr[x]);
// }

// for (let x of arr) {
//     console.log(x); // does not include index
// }

// let index = 0
// while(index < len) {
//     const element = arr[index]
//     console.log(element, index);
//     index++
// }

// do {
//     console.log('hhhh'); // iterate the do even if the while is false
// } while (false)



// Array methods. only use with an array
// 1) forEach()
// 2) some() > return true of false, loop and check if one item/element is satisfying the condition

// let users = ['John', 'Mary', 'Dan', 'Anne']

// 1) forEach 

// users.forEach((item) => {
//     console.log(item);
// })

// users.forEach((item, index) => {
//     console.log(item, index);
// })

// users.forEach((item, index, arr) => {
//     console.log(arr);
//     arr[index] = item + '@gmail.com'
// })

// console.log(users); // it effects the original arrays

// 2) some()  
// let result = users.some((item) => {
//     return item === 'John'
// })
// console.log('result:', result);

// 3) every() : opposite of some()

// let result2 = users.every((item) => {
//     return item === 'Dan'
// })

// console.log('result2:', result2);

// create a function that get an arry of numbers as input 
// and return a new array with all numbers multiply by 2 
// for eg givenArr is [1,2,3,4]
// result is [2,4,6,8]

// const numbers = [1,2,3,4]
// function multiplyByTwo(a) {
    
//     a.forEach((element, i, arr) => {
//         arr[i] = element * 2
//     });
//     return a
// }
// console.log(multiplyByTwo(numbers));

// function myFunc(a) {
//     let arr = []
//     for (let i = 0; i < a.length; i++) {
//         arr.push(a[i] * 2)
//     }
//     return arr
// }

// function myFunc(a) {
//     a.forEach((num, i, arr) => {
//         arr[i] = num * 2
//     })
//     return a
// }

// console.log(myFunc(numbers));

// map(): returns new array, need to return 

// let arr = numbers.map((item) => {
//     return item * 2
// })
// console.log(arr);
// console.log(numbers)

// let users = [
//     {userid: 2, name: 'John', email: 'jj@gmail.com'},
//     {userid: 2, name: 'Mary', email: 'mary@gmail.com'},
//     {userid: 2, name: 'Anne', email: 'anne@gmail.com'},
// ]

// let mar = users.map(item => {
//     if (item.name === 'Mary') {
//         return item
//     }
//     else return
// })

// console.log(mar);

// function render(arr) {
//     let html = arr.map((item) => {
//         return `<div>
//         <h2>${item.userid} </h2>
//         <h4>${item.name} </h4> 
//         <p>${item.email}</p>
//         </div>`;
//     })
//     console.log(html);
//     document.getElementById('root').innerHTML = html.join('')
// }

// render(users)
/* Exercise
 * Create an function that get an array of Numbers as input
 * and return a new array with all numbers greater than 3
 * For example:
 * Give this array [0,1,1,2,3,5,8]
 * result [5,8]
 */
// let oldArr = [0,1,1,2,3,5,8]
// function numGreaterthanthree(arr) {
//     let newArr = []
//     oldArr.map(item => {
//         if (item > 3) {
//             newArr.push(item)
//         }
//         else {
//             return 
//         }
//     })
//     console.log(newArr);
// }

// numGreaterthanthree(oldArr)

// let oldArr = [0,1,1,2,3,5,8]

// function filter(arr) {
//     let newArr = []
//     for (item of arr) {
//         if (item > 3) {
//             newArr.push(item)
//         }
//         return newArr
//     }
// }
// console.log(filter(oldArr));

// filter() : return new array after filtering meaning after satisfying the condition

// let newArr = oldArr.filter(item => item > 3)
// console.log(newArr);

// exercise 
// const arr = [
//     { id: 1, name: "John", email: "jjj@gmail.com" },
//     { id: 2, name: "Mor", email: "mmm@gmail.com" },
//     { id: 3, name: "Marry", email: "marry@gmail.com" },
//     { id: 4, name: "Or", email: "or@gmail.com" },
//   ];

// // return all name that contains o

// const newArr = arr.filter(item => {
//     return item.name.toLowerCase().includes('o')
// })
// console.log(newArr);

/**  Exercise
 * Create an function that get an array of Numbers as input
 * and return the sum of all numbers
 * For example:
 * Give this array [2, 5, 10,100]
 * result 117
 */

// const arr = [2, 5, 10,100]

// function sum(ar) {
//     let sum = 0
//     ar.forEach((num) => {
//          sum += num
//     })
//     return sum
// }
// console.log(sum(arr));


// reduce method

// let sum = arr.reduce((total, item) => {
//     return total + item
// }, 100)
// console.log(sum);

//find()

// const arr = [
//     { id: 1, name: "John", email: "jjj@gmail.com" },
//     { id: 2, name: "Mor", email: "mmm@gmail.com" },
//     { id: 3, name: "Marry", email: "marry@gmail.com" },
//     { id: 4, name: "Or", email: "or@gmail.com" },
//   ];

// let user = arr.find(item => {
//     return item.id === 3
// })

// console.log(user);

// findIndex()

// let index = arr.findIndex(item => {
//     return item.id === 2
// })

// console.log(index);


/** 
Birthday Cake Candles
This array are Birthday Cake Candles
You can blow only the tallest candles
let arr = [2,8,4,4,8,1,8]
birthdayCakeCandles function will return
how many candles you can blow
hint: how to find the max number in a given array ? 
*/

// let arr = [2,8,4,4,8,1,8,9]

// function tallestCandle(ar) {
//     let candle = Math.max(...ar)
//     let numCandle = ar.filter(item => {
//         return item === candle
//     })
//     return numCandle
// }

// console.log(tallestCandle(arr));

// destructuring in array, rest operator

let arr = [1, 2, 3,4,5,6,7]
// let a = arr[0]
// let b = arr[1]
// let c = arr[2]

let [a,b,c,...rest] = arr
console.log(a,b,c ,rest);





