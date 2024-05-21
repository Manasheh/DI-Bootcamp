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
let num: number;

//type string
// let str = "abc";
let str: string = "abc";

//type boolean
let bool: boolean = true;

// type any - try not to use any
let anyVar: any = 12;
anyVar = "abc";
anyVar = true;

// function
const sum = (a: number, b: number) => {
  return a + b;
};

// console.log(sum(2, 6));

// console.log(sum(2, 'abc'));

const concat = (a: number, b: string | number): string | number => {
  if (typeof b === "string") {
    return a + b + "";
  }
  return a + b;
};

// console.log(concat(2, 'a'));

// union type
let union: number | string = 12;
union = "abc";
let union2: number | string | boolean;
union2 = 12;
union2 = "abc";
union2 = true;

// type RegExp
let re: RegExp = /\w+/g;

// type Array
let strarr: string[] = ["loading", "success", "failed"];
let strarr2: string[] = [];

// strarr[1] = 1;
// strarr.push("d");
// strarr.push(1);

let numarr: number[] = [1, 2, 3];
numarr.push(4);
// numarr.push("a");

let numstr: (string | number | boolean)[] = ["a", 1, "b", true];

// type Tuple
let mytuple: [string, number, boolean] = ["a", 1, true];

// type Object
let myObj: object = {};
myObj = [];

const myObj2 = {
  name: "John",
  age: 25,
  address: "abc",
};
// myObj2.name = 5
myObj2.age = 30;

// type & interface
type MyType = [string, number, boolean];
let mytype: MyType = ["a", 1, true];

interface MyInterface {
  arr: [string, number, boolean];
}
let myinterface: MyInterface = {
  arr: ["a", 1, true],
};

type User = {
  name: string;
  age: number;
  address?: string;
};

interface MyUser {
  name: string;
  age: number;
  address?: string;
}

let user: User = {
  name: "John",
  age: 25,
};

let user2: User = {
  name: "John",
  age: 25,
};

user.address = "abc";

const printUser = (user: User) => {
  console.log(user);
};

// printUser({name: "John", age: 25, status: "abc"});

// type Enum
enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade[1]);

// type literal
let literal: "loading" | "success" | "failed";
// literal = "somthing";
