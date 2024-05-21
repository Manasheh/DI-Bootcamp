//exercise 1
// console.log("hello world!");

//exercise 2
// let age: number = 25;
// let username: string = 'John';

// console.log("Age:", age);
// console.log("Name:", username);

//exercise 3
// let id: number | string

//exercise 4

// let checkNumber = (a:number): string => {
//     if(a > 0) {
//         return 'Positive'
//     } else if (a < 0) {
//         return 'Negative'
//     } else {
//         return 'Zero'
//     }
// }

// console.log(checkNumber(5));
// console.log(checkNumber(-5));
// console.log(checkNumber(0));


//exercise 5

// function add(a: number | string, b: number | string) {
//     if(typeof a === 'number' && typeof b === 'number') {
//         return a + b
//     } else if (typeof a === 'string' && typeof b === 'string') {
//         return a.concat(b)
//     } else {
//         throw new Error("Error types");
        
//     }
// }

// console.log(add('apple', 5));


//exercise 6
// function getDetails(name: string, age: number) {
//     const greetMessage: string =  `Hello ${name}, what is your ${age} ?`
//     return [name, age, greetMessage] //tuples
// }

// console.log(getDetails('Tom', 8));


//exercise 7
// function createPerson(name: string, age: number) {
//     return {
//         name: name,
//         age: age
//     }
// }

// const person = createPerson('John', 34)
// console.log('Person', person);


//the rest Ziv told us not to do.




// day2 

// type alias 

// type StrOrNum = string | number;
// type StrOrNumArray = (string | number)[]

// type Student = {
//     name : string;
//     age: number;
//     isGood: StrOrNum
// }

// type User = {
//     name: string;
//     isGood: StrOrNum 
// }


//type literal

// type Name = 'John' | 'Jane' | "Doe";

// type status = 'success' | 'error' | 'failed'
// let userStatus: status = 'failed'

//function return

// const add = (a: number, b: number|string): number => {
//     //type guard
//     if(typeof b === 'string') {
//         return -1
//     }
//     return a + b
// }


// function overload 

// function add (a: number, b: number): number ;
// function add (a: string, b: string): string ;
// function add (a: any, b: any): any {
//     return a + b
// } ;

// console.log(add(2,3));
// console.log(add('s', 'd'));


//not return value: function that does not return a value

// const greet = (name: string): void => {
//     console.log(`Hello ${name}`);
// }


//type function 
//  type addFunc = (a: number, b: number) => number;

//  const add: addFunc = (a, b)=> {
//     return a + b
//  }



// optional parameter 
// const addOpt = (a: number, b?: number): number => {
//     return a + (b||0)
// }


//rest parameter 
// const addRest = (a: number, ...rest: number[]):number => {
//     return rest.reduce((acc, val) => acc + val, a)
// }
// console.log(addRest(100, 4,5,6))


// never type 

// const throwError = (message: string): never => {
//     throw new Error(message)
// }


//assertion or type casting
//alias type//
// type One = string;
// type Two = string | number;
// type Three = 'hello';  //type literal

// let a: One = 'hello';
// let b = a as Two; //assertion or casting
// b = 2 // string or number
// let c = a as Three
// let d = <One>'world' // d is as type of a => casting
// let e = <string | number>1; 
// console.log(b);


//Dom elements
// const img = document.querySelector('img') as HTMLImageElement
// if i am sure i have image in my html 
// if (img) {
//     img.src = 'https://www.google.com'
// }
// img.src = 'https://www.google.com'

// const input = <HTMLImageElement>document.querySelector('input');

// EG 
// const year = document.getElementById("year") as HTMLSpanElement 

// or

const year = <HTMLSpanElement>document.getElementById("year") as HTMLSpanElement 
// const thisYear = new Date().getFullYear().toString()
// or 
// const thisYear = <string>new Date().getFullYear().toString()
//  or 
const thisYear: string = <string>new Date().getFullYear().toString()

year.setAttribute("datetime", thisYear)
year.textContent = thisYear





