// // fs - sync& fs - async
// // __dirname
// // console.log(__dirname);

const { log } = require('console');

// //read file:
// const fs = require('fs')
// // const path = require('path')
// // const _dirname = path.resolve() // if using ecma script 6
// // console.log(_dirname);
// // readFileSync is use with async and await or for instant output 
// // try {
// //     const data = fs.readFileSync(__dirname + '/files/info', 'utf-8')
// //     console.log(data);
// // } catch (error) {
// //     console.log('no such file');    
// // }

// // with asynchronize 
// // this is use when i don't want my user to wait for the data.
// // for large file
// // fs.readFile(__dirname + '/files/info', 'utf-8', (err, data) => {
// //     if (err) return console.log(err);
// //     console.log(data);
// // })


// //write to a file:
// // to root directory
// // let data = '1234567' // data i want to write
// // fs.writeFile('newFile', data, 'utf-8', (err) => {
// //     if(err) return console.log(err);
// //     console.log('file created');
// // })

// // to specific file

// // let data = '1234567' // data i want to write
// // fs.writeFile('./files/newFile', data, 'utf-8', (err) => {
// //     if(err) return console.log(err);
// //     console.log('file created');
// // })

// //override if created with same name 


// // let data = 'abcdef' // data i want to write
// // fs.writeFile('./files/newFile', data, 'utf-8', (err) => {
// //     if(err) return console.log(err);
// //     console.log('file created');
// // })


// //create html

// // let data = '<html><body><h1>Hello</h1></body></html>' // data i want to write
// // fs.writeFile('./files/index.html', data, 'utf-8', (err) => {
// //     if(err) return console.log(err);
// //     console.log('file created');
// // })


// // let data = '12345dsaf'
// // fs.appendFile('/newFile', data, 'utf-8', (err) => {
// //     if(err) return console.log(err);
// //     console.log('file append');
// // })


// // fs copy file

// fs.copyFile('.files/newFile', 'newFile', (err) => {
//     if (err) return console.log(err);
// })

// // creating json file,
// let data = [
//     {name: 'aaa', pasa: 'jdfaskjfas'},
//     {name: 'bbb', pasa: 'jdfaskjfas'}
// ] // data i want to write
// fs.writeFile('./files/users.json', JSON.stringify(data), 'utf-8', (err) => {
//     if(err) return console.log(err);
//     console.log('file created');
// })




/** fs - sync / async  */
// const fs = require("fs");
// const path = require("path");

// const __dirname = path.resolve()
// console.log(_dirname);
// __dirname

// console.log(__dirname);

// try {
//   const data = fs.readFileSync(__dirname + "/files/info", "utf-8");
//   console.log(data);
// } catch (e) {
//   console.log("no such file");
// }

// console.log("before");
// fs.readFile(__dirname + "/files/info", "utf-8", (err, data) => {
//   if (err) return console.log(err);

//   console.log(data);
// });
// console.log("after");

// let data = [
//   { name: "aaa", pasa: "ksdfjklshf8nn7n8743" },
//   { name: "bbb", pasa: "ksdfjklshf8nn7n8743" },
//   { name: "ccc", pasa: "ksdfjklshf8nn7n8743" },
// ];
// fs.writeFile("./files/users.jsom", JSON.stringify(data), "utf-8", (err) => {
//   if (err) return console.log(err);
//   console.log("file created!");
// });

// let data = "1q2w23e4r5t";
// fs.appendFile("./files/newfile", data, "utf-8", (err) => {
//   if (err) return console.log(err);
//   console.log("append!");
// });

// fs.copyFile('./files/newfile', './files/newfile1', (err)=>{
//     if (err) return console.log(err);

// })



//fs with promises

const fs = require('fs').promises;

const read = async() => {
    const data = await fs.readFile('./files/info', 'utf-8')
    console.log(data);
}
