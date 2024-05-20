"use strict";
// let username = 'John';
// let age = 23;
// let a = 12;
// let b = '23';
// let c = 2;
// console.log(a + b);
// console.log(a / c);
let a = 12;
let b;
a = 123;
let yesno = true;
//type number
let num = 123;
// type string
let str = 'abc';
//type boolean
let bool = true;
//type any
let anyVar = 12;
anyVar = 'abc';
anyVar = true;
//type functions
const sum = (a, b) => {
    return a + b;
};
console.log(sum(2, 8));
const concat = (a, b) => {
    if (typeof b === 'string') {
        // Convert string to number, default to 0 if conversion fails
        const numericB = Number(b) || 0;
        return a + numericB;
    }
    return a + b;
};
console.log(concat(2, 'a'));
// type union 
let union = 12;
union = 'abc';
let union2;
union2 = 12;
union2 = 'abc';
union2 = true;
//type RegExp
let re = /\w+/g;
//type array
let strArr = ['a', 'b', 'c'];
strArr[1] = '1';
strArr.push('d');
let numarr = [1, 3, 3];
numarr.push(4);
let numstr = ['a', 1, 'b', 2];
// type tuple 
let myTuple = ['a', 1, true];
// type object 
let myObj = {};
myObj = [];
// eg 
const myObj2 = {
    name: 'John',
    age: 23,
};
let mytype = ['a', 1, true];
let user = {
    name: 'John',
    age: 23
};
let user2 = {
    name: 'Sam',
    age: 33,
    address: 'usa'
};
const printUser = (user) => {
    console.log(user);
};
printUser({ name: 'John', age: 23, address: 'abc' });
//type enum
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 1] = "B";
    Grade[Grade["A"] = 2] = "A";
})(Grade || (Grade = {}));
console.log(Grade.B);
