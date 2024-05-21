// exercise one 

// class Person {
//     private firstName: string;   
//     private lastName: string;    
//     public age: number;          
//     protected address: string;  

//     constructor(firstName: string, lastName: string, age: number, address: string) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.address = address;
//     }

//     public getFullName(): string {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// const person = new Person('John', 'Doe', 30, '123 Main St');
// console.log(person.getFullName());
// console.log(person.age);           
// console.log(person.address);    
// console.log(person.firstName); 



// exercise two 

// interface Vehicle {
//     make: string;
//     model: string;
//     start(): string;
// }

// interface Car extends Vehicle {
//     numberOfDoors: number;
// }

// class Sedan implements Car {
//     make: string;
//     model: string;
//     numberOfDoors: number;

//     constructor(make: string, model: string, numberOfDoors: number) {
//         this.make = make;
//         this.model = model;
//         this.numberOfDoors = numberOfDoors;
//     }

//     start(): string {
//         return `The ${this.make} ${this.model} with ${this.numberOfDoors} doors is starting.`;
//     }
// }


// const myCar = new Sedan('Toyota', 'Camry', 4);
// console.log(myCar.start()); 





