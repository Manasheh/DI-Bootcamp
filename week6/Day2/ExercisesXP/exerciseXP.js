// Exercise 1 : Colors
// Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
// Hint : Use the array methods taught in class. Look at the lesson Array Methods.
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// let colorMessage = colors.forEach((color, i) => {
//     console.log(`${i + 1}# choice is ${color}`)
// })

// if (colors.includes('Violet')) {
//     console.log('Yes');
// }
// else console.log('No...');


// Exercise 2 : Colors #2 

// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th","st","nd","rd"];

// function getSuffix(num) {
//     if (num === 1) {
//         return 'st'
//     }
//     else if (num === 2) {
//         return 'nd'
//     }
//     else if (num === 3) {
//         return 'rd'
//     }
//     else return 'th'
// }

// let colorOrder = colors.forEach((item, i) => {
//     console.log(`${i + 1}${getSuffix(i+1)} choice is ${item}`)
// })


// Exercise 3 : Analyzing

// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result); 
// ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']

// ------2------
// const country = "USA";
// console.log([...country]); ['U', 'S', 'A']

// ------Bonus------
// let newArray = [...[,,]];
// console.log(newArray);  undefined


// Exercise 4 : Employees
// Using the map() method, push into a new array the firstname of the user and a welcome message. You should get an array that looks like this :
// Using the filter() method, create a new array, containing only the Full Stack Residents
// Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// welcomeStudents = []
// const getFirstName = users.map((user) => {a v
//     return welcomeStudents.push(`Hello ${user.firstName}`)
// })
// console.log(welcomeStudents);



// function residence() {
//     const fullStackResidence = []
//     users.filter(student => {
//         if (student.role === 'Full Stack Resident') {
//             fullStackResidence.push(student)
//         }
//         else return
//     })
    
//     return fullStackResidence
// }
// console.log(residence(users));

// const residence = users.filter(item =>  item.role == 'Full Stack Resident').map(item => item.lastName)
// console.log(residence);


// Exercise 5 : Star Wars 
// Using this array const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// Use the reduce() method to combine all of these into a single string.

// const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// const reduce = epic.reduce((total, curr) => total += curr )
// console.log(reduce);

// Exercise 6 : Employees #2
// Using the filter() method, create a new array, containing the students that passed the course.
// Bonus : Chain the filter method with a forEach method, to congratulate the students with their name and course name (ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)

const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

const studentPass = students.filter(student => student.isPassed).map(student => `Good job ${student.name}, you pass the course in ${student.course}`)
console.log(studentPass);
