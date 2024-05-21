"use strict";
// // type alias
// type StrOrNum = string | number | boolean;
// type StrOrNumArray = (string | number)[];
// type Student = {
//   name: string;
//   age: number;
//   isGood: StrOrNum;
// };
// type User = {
//   name: string;
//   isGood: StrOrNum;
// };
// let user: User = {
//   name: "John",
//   isGood: "good",
// };
// // type literal
// type Name = "John" | "Jane" | "Doe";
// // let username: Name = "Dan";
// type status = "success" | "error" | "failed";
// let userStatus: status = "failed";
// // function return
// // const add = (a: number, b: number | string): number => {
// //   // type guard
// //   if (typeof b === "string") {
// //     return -1
// //   }
// //   return a + b;
// // }
// // console.log(add(2, true));
// // function overload
// // function add(a: number, b: number): number;
// // function add(a: string, b: string): string;
// // function add(a: StrOrNum, b: StrOrNum): StrOrNum {
// //   if (typeof a === "string" && typeof b === "string") {
// //     return a + b;
// //   }
// //   if (typeof a === "number" && typeof b === "number") {
// //     return a + b;
// //   }
// //   return -1;
// // }
// // console.log(add(2, 3));
// // console.log(add("s", "d"));
// // console.log(add('s', 1));
// // not return value
// const greet = (name: string): void => {
//   console.log(`Hello ${name}`);
// };
// // type function
// type addFunc = (a: number, b: number) => number;
// const add: addFunc = (a, b) => {
//   return a + b;
// };
// const addVAT: addFunc = (a, b) => {
//   return a + b * 0.07;
// };
// // optional parameter
// const addOptional = (a: number, b?: number): number => {
//   return a + (b || 0);
// };
// // console.log(addOptional(2));
// //  addOptional(2);
// // default parameter
// const addDefault = (a: number, b: number = 0): number => {
//   return a + b;
// };
// // console.log(addDefault(2));
// // rest parameter
// const addRest = (a: number, b: number, ...rest: number[]): number => {
//   return rest.reduce((acc, val) => acc + val, a * b);
//   // console.log(rest);
//   // return -1
// };
// // console.log(addRest(100, 3, 4, 5, 6));
// // never type
// const throwError = (message: string): never => {
//   throw new Error(message);
// };
// const infinite = () => {
//   let i: number = 1;
//   while (true) {
//     i++;
//     if (i > 100) break;
//   }
// };
// // assertion or type casting
// // aliases type
// type One = string;
// type Two = string | number;
// type Three = "hello";
// let a: One = "hello";
// let b = a as Two;
// // b = 2;
// let c = a as Three;
// let d = <One>"world";
// let e = <Two>"aaa";
// // console.log(b);
// // Dom Element
// // const img = document.querySelector('img') as HTMLImageElement;
// // sure that the exit
// // if (img) {
// //   img.src = 'https://www.google.com';
// // }
// // img.src = 'https://www.google.com';
// // const input = <HTMLInputElement>document.querySelector('input');
// // const year = <HTMLSpanElement>document.getElementById("year")
// // const thisYear: string = <string>new Date().getFullYear().toString()
// // year.setAttribute("datetime", thisYear)
// // year.textContent = thisYear
