"use strict";
// Class
// access modifiers: public, private, protected
// let user = {
//     name: "John",
//     age: 30,
//     active: true,
//     grede: 90,
// };
// let obj = {
//     name: "John",
//     age: 30,
//     active: true,
// };
class User {
    // grade: number;
    constructor(name, age, active) {
        this.name = name;
        this.age = age;
        this.active = active;
    }
    get gage() {
        return this.age;
    }
    set sage(age) {
        this.age = age;
    }
    get gactive() {
        return this.active;
    }
    set sactive(active) {
        this.active = active;
    }
}
