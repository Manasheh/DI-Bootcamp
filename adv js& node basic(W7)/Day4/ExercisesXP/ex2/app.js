import {persons} from "./data.js";

let total = 0
function avgAge() {
    let averageAge;
    for (let index = 0; index < persons.length; index++) {
        const age = persons[index].age;
        total += age
    }
    averageAge = total / persons.length
    console.log(averageAge);
}

avgAge()

