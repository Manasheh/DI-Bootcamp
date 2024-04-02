
/* 16 = 1 + 6 = 7
942 = 9 + 4 + 2 = 15 = 1 + 5 = 6
132189 = 1+3+2+1+8+9 = 24 = 2 + 4 = 6 */


// function calcDigit(num) {
//     let arr = new String(num).split('');
//     let ret = 0
//     for (let i in arr) {
//         ret = ret + Number(arr[i])
//     }
//     if (ret < 10) {
//         return ret
//     } 
//     return calcDigit(ret)
// }

// console.log(calcDigit(8745123));

// using reduce to calculate //

// function calcDigit(num) {
//     let arr = new String(num).split('')
//     let newNumbers = arr.reduce((total, num) => {
//         return total + Number(num)
//     }, 0)
//     return (newNumbers < 10) ? newNumbers : calcDigit(newNumbers)
// }

// OBJECT METHODS 
// object destructuring //

// let user = {
//     name : 'John',
//     email : 'example@gmail.com',
//     age : 24,
//     address : {
//         city: {
//             c : 'tel aviv',
//         }
//     },
// }

// const {email, name , age, address:{city:{c}}} = user
// console.log(c);

// function getUserInfo(obj) {
//     const {name, age, email} = obj
//     return email + ' ' + name + ' ' + age
// }

// console.log(getUserInfo(user));


// loop an object with only for in loop //
// let user = {
//     name : 'John',
//     email : 'example@gmail.com',
//     age : 24,
// }

// for (let x in user) {
//     console.log(x, user[x]);
// }

// methods to convert object into an array. 
// It returns an arry and can use any array methods like map, filter, forEach, index etc
// 1) Object.keys 
// 2) Object.values
// 3) Object.entities

// to return an object we use:
// 1) Object.fromEntries(Array)

// let keys = Object.keys(user)
// console.log(keys);

// let values = Object.values(user)
// console.log(values);

// let entries = Object.entries(user)
// console.log(entries);
// entries.forEach((item) => {
//     const [key, value] = item
//     console.log(key, value);
// })



//  Object.fromEntries(Array), should be array inside of an array //

// let arr = [
//     ['name', 'john'],
//     ['email', 'example@gmail.com'],
//     ['age', 13],
// ]
// let obj = Object.fromEntries(arr)
// console.log(obj);


// clone object //

// let user = {
//     name : 'John',
//     email : 'example@gmail.com',
//     age : 24,
// }

// let user1 = {...user}

// way to clone nested object inside nested object and so on...
// JSON: it is a string , json dont accept function.
// let userJson = JSON.stringify(user)
// let user2 = JSON.parse(userJson)
// console.log(user);
// console.log(userJson);
// console.log(user2);


// Spreading //
// if i want to clone an object to a new object

// let user = {
//     name : 'John',
//     email : 'example@gmail.com',
//     age : 24,
// }

// let user1 = {...user, name: 'Mary', status: 'single'} // call spreading, we can also clone and add the new object at the same time
// user1.name = 'Mary' can clone and add new object

// console.log(user);
// console.log(user1);

// this keyword // this is referring to the window object 

// let obj = {
//     name : 'John',
//     getName : function() {
//         return this.name; // this is referring to the object itself
//     },
// }

// console.log(obj.getName());


// Class in js //

class Animal {
    constructor(type, name){  // main function in class. Any class have a constructor even if i don't define.
        this.type = type,
        this.name = name
    } 
    getType () {
        return this.type
    }
    get() {}      //class have method
    setName(name) {   // class have method
        this.name = name;
    } 
    getTypeAndName () {
        return this.type + ' ' + this.name
    }
}

let myDog = new Animal('Hasky', 'kuku')
let urDog = new Animal('Frenchi', 'Bobo')
// console.log(myDog);
// console.log(urDog);

class Dog extends Animal {    //inherits all the method and data from the animal class
    constructor(name) {
        super('Dog', name);
    }
}

class Cat extends Animal {
    constructor(name) {
        super('Cat', name)
    }
    setType(param) {
        this.type = param;
    }
    getType() {
        return 'boo'
    }
}

let dog1 = new Dog('Shadow')
console.log(dog1)
let cat1 = new Cat('Mimi')
cat1.setType('catcat')
console.log(cat1);

