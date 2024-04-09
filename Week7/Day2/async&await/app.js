// what is asynchronous 
//Due to synchrous programming, sometimes important instructions get block due to 
//some previous instructions, which causes a delay in the UI.
//Asynchronous code execution allows to execute next instruction immediately 
// and doesn't block the flow

// example of asynchronous programming: 

// console.log('one');
// console.log('two');
// setTimeout(() => {
//     console.log('hello');
// }, 2000);
// console.log('three');
// console.log('four');


// * callBack * //

// A callback is a function passed as an argument to another function 

// example 

// function sum (a, b) {
//     console.log(a + b)
// }

// function calculator(a, b, sumCallBack) {
//     sumCallBack(a, b)
// }

// calculator(1,2, sum)


// * Promises * //

// Promise is for eventual completion of task. It is an object in JS
// It is a solution to callback hell

// let promise = new Promise((resolve, reject) => {...}) 

// let promise = new Promise((resolve, reject) => {
//     console.log('I am a promise');
//     // resolve('I am resolve')
//     reject('i am reject')
// })

// promise have 3 stages:
// 1 ) pending
// 2 ) fullfill
// 3 ) reject

// * Async-Await *//

// async function hello() {
//     console.log('hello');
// }

// await pauses the execution of its surrounding
// async function until the promise is settled 


// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('weather data')
//             resolve('success')
//         }, 2000)
//     })
// }

// api()

// async function getWeatherData() {
//     await api()
// }

// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('data:', dataId);
//             resolve('its resolve')
//         }, 2000);
//     })
// }

// async function getAllData() {
//     await getData(1)
//     await getData(2)
//     await getData(3)
// }

// fetch API 

// the fetch api provides an interface for fetching(sending/receiving)
// resources.
// it uses request and response objects. 
// the fetch() method is used to fetch a resources (data)

// let promise = fetch(url, [options])

