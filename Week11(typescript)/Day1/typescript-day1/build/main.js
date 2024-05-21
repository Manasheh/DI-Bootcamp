"use strict";
// let usename = "John";
// let age = 25;
// usename='Daniel';
// usename=25;
// age ='25';
// let a = 12;
// let b ='12';
// let c = 2;
// console.log(a + b); // 1212
// console.log(a + c);
// console.log(a * b); // 14
// let a: number = 12;
// let b: string;
// b = "abc";
// a = 123;
// let yesno: boolean = true;
// yesno = false;
// type number
// let num = 12;
let num;
//type string
// let str = "abc";
let str = "abc";
//type boolean
let bool = true;
// type any - try not to use any
let anyVar = 12;
anyVar = "abc";
anyVar = true;
// function
const sum = (a, b) => {
    return a + b;
};
// console.log(sum(2, 6));
// console.log(sum(2, 'abc'));
const concat = (a, b) => {
    if (typeof b === "string") {
        return a + b + "";
    }
    return a + b;
};
// console.log(concat(2, 'a'));
// union type
let union = 12;
union = "abc";
let union2;
union2 = 12;
union2 = "abc";
union2 = true;
// type RegExp
let re = /\w+/g;
// type Array
let strarr = ["loading", "success", "failed"];
let strarr2 = [];
// strarr[1] = 1;
// strarr.push("d");
// strarr.push(1);
let numarr = [1, 2, 3];
numarr.push(4);
// numarr.push("a");
let numstr = ["a", 1, "b", true];
// type Tuple
let mytuple = ["a", 1, true];
// type Object
let myObj = {};
myObj = [];
const myObj2 = {
    name: "John",
    age: 25,
    address: "abc",
};
// myObj2.name = 5
myObj2.age = 30;
let mytype = ["a", 1, true];
let myinterface = {
    arr: ["a", 1, true],
};
let user = {
    name: "John",
    age: 25,
};
let user2 = {
    name: "John",
    age: 25,
};
user.address = "abc";
const printUser = (user) => {
    console.log(user);
};
// printUser({name: "John", age: 25, status: "abc"});
// type Enum
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade[1]);
// type literal
let literal;
// literal = "somthing";
