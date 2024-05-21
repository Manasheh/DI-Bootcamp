// Class
// access modifiers: public, private, protected

// class User {
//   name: string;
//   age: number;
//   active: boolean;

//   constructor(
//     name: string,
//     age: number,
//     active: boolean
//   ) {
//     this.name = name;
//     this.age = age;
//     this.active = active;
//   }

//   public getAge() {
//     return `My age is ${this.age}`;
//   }
//   getActive() {
//     return `My active is ${this.active}`;
//   }
// }

// class Student extends User {
//   constructor(name: string, age: number, active: boolean) {
//     super(name, age, active);
//   }
//   getStudentAge() {
//     // return `My age is ${this.age}`;
//   }
//   getActiveStudent(): string {
//     return `Student active is ${this.active}`;
//   }
// }

// let user = new User("John", 30, true);
// console.log(user.getAge());

// let user2 = new User("Jane", 25, false);
// console.log(user2.getAge());

// console.log(user.name);
// // console.log(user.age);
// console.log(user.getActive());

// let student = new Student("Doe", 20, false);
// // console.log(student.getAge());
// console.log(student.name);
// // console.log(student.age);

// console.log(student.getActive());
// type strOrnum = string | number;

// interface strOrNumInterface {
//   name: string | number;
// }

type UserInterface = {
  name: string;
  age: number;
  active: boolean;
};

// type Grade = {
//   grede: number;
// }

// let user: UserInterface & Grade = {
//   name: "John",
//   age: 30,
//   active: true,
//   grede: 90,
// }

// let obj: UserInterface = {
//   name: "John",
//   age: 30,
//   active: true,
// };

// must have the same properties as the interface
// and at least seter or getter for each property
class User implements UserInterface {
  public _name: string;
  protected _age: number;
  private _active: boolean;

  constructor(name: string, age: number, active: boolean) {
    this._name = name;
    this._age = age;
    this._active = active;
  }

  get name(): string {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }

  get age(): number {
    return this._age;
  }
  set age(age: number) {
    this._age = age;
  }

  get active(): boolean {
    return this._active;
  }
  set active(active: boolean) {
    this._active = active;
  }
}
