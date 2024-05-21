// // Class definition for User
// class User {
//     // public name: string;
//     // private age: number;
//     // protected active: boolean;

//     constructor(
//         public name: string, 
//         private age: number, 
//         protected active: boolean) {
//         // this.name = name;
//         // this.age = age;
//         // this.active = active;
//     }

//     public getAge(): string {
//         return `My age is ${this.age}`;
//     }

//     public getActive(): string {
//         return `My active status is ${this.active}`;
//     }
// }

// // Class definition for Student, extending User
// class Student extends User {
//     constructor(name: string, age: number, active: boolean) {
//         super(name, age, active);  // Correct call to super()
//     }
// }

// // Creating an instance of User
// let user = new User('John', 30, true);
// console.log(user.getAge());         // Output: My age is 30
// console.log(user.name);             // Output: John
// console.log(user.getActive());      // Output: My active status is true

// // Creating an instance of Student
// let student = new Student('Doe', 20, true);
// console.log(student.getAge());      // Output: My age is 20
// console.log(student.name);          // Output: Doe

// // Access to private property will cause an error
// // console.log(student.age);       // Error: Property 'age' is private and only accessible within class 'User'.

// // Access to protected property is not allowed outside the class hierarchy
// // console.log(student.active);    // Error: Property 'active' is protected and only accessible within class 'User' and its subclasses.



// inerface of user 
interface UserInterface {
    name: string;
    age: number;
    active: boolean;

}

class User implements UserInterface {
    // name: string;
    // age: number;
    // active: boolean;
    constructor(
       public name: string, 
        public age: number, 
        public active: boolean) {
        // this.name =name;
        // this.age = age;
        // this.active = active
    }

    get ageUser() {
        return this.age
    }

    set setAge(age: number) {
        this.age = age

    }
   
}
