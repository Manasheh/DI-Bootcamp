// let username = 'John';
// let age = 23;

// let a = 12;
// let b = '23';
// let c = 2;

// console.log(a + b);
// console.log(a / c);

let a:number = 12;
let b: string;
a = 123

let yesno: boolean = true;

//type number
let num: number = 123;


// type string
let str: string = 'abc';


//type boolean
let bool: boolean = true;


//type any
let anyVar: any = 12;
anyVar = 'abc';
anyVar = true;


//type functions
const sum = (a:number, b: number) => {
    return a + b
}


console.log(sum(2, 8))
const concat = (a: number, b: string | number): number => {
    if (typeof b === 'string') {
        // Convert string to number, default to 0 if conversion fails
        const numericB = Number(b) || 0;
        return a + numericB;
    }
    return a + b;
}

console.log(concat(2, 'a'));


// type union 
let union: number | string = 12;
union = 'abc'
let union2: number | string | boolean;
union2 = 12
union2 = 'abc'
union2 = true

//type RegExp
let re: RegExp = /\w+/g;


//type array

let strArr: string[] = ['a', 'b', 'c']
strArr[1] = '1'
strArr.push('d')

let numarr: number[]= [1,3,3]
numarr.push(4)
let numstr:(string | number | boolean)[] = ['a', 1, 'b', 2]


// type tuple 
let myTuple: [string, number, boolean] = ['a', 1 , true]

// type object 
let myObj: object = {}
myObj = []

// eg 
const myObj2 = {
    name: 'John',
    age: 23,
}

// myObj2.name = 4


// type(must have equal sign) & interface (without equal sign, everything inside and object)
type MyType = [string, number, boolean]
let mytype: MyType = ['a', 1, true]

type User = {
    name: string
    age : number
    address? : string
}

interface MyUser {
    name: string;
    age: number;
    address? : string;
}

let user: User = {
    name: 'John',
    age: 23
}

let user2: User = {
    name : 'Sam',
    age: 33,
    address: 'usa'
}


const printUser = (user: User) => {
    console.log(user)
}

printUser({name: 'John', age: 23, address: 'abc'})

//type enum
enum Grade {
    U,
    D,
    C,
    B= 1,
    A,
}

console.log(Grade.B)
