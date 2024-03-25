const people = ["Greg", "Mary", "Devon", "James"];
//1) Write code to remove “Greg” from the people array.

people.shift()
// console.log(people)

//2) Write code to replace “James” to “Jason”.

delete people[2]
people[2] = 'Jason'
// console.log(people);


//3)  Write code to add your name to the end of the people array.

people.push('Menashe')
// console.log(people);

//4) Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

// console.log(people.indexOf('Mary'));

/* 5) Write code to make a copy of the people array using the slice method.
The copy should NOT include “Mary” or your name.
Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
Hint: Check out the documentation for the slice method */

let newPeople = people.slice(1,3)
// console.log(newPeople);


// 6) Write code that gives the index of “Foo”. Why does it return -1 ?

const indexFoo = people.indexOf('Foo')
// console.log(indexFoo); // -1:false

// 7) Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?

const last = people[people.length - 1]
// console.log(last);


// Part 2 
//1) Create an array called colors where the value is a list of your five favorite colors.

// for (person in people) {
//     console.log(people[person]);
// }

/*2) Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
Hint: take a look at the break statement in the lesson. */

// for (let i = 0; i < people.length; i++) {
//     if (people[i] == 'Devon') {
//         break
//     }
//     else {
//         console.log(people[i]);
//     }
// }

// Exercise 2 

// 1) Create an array called colors where the value is a list of your five favorite colors.

// const colors = ['Ghost white', 'Alice Blue', 'Antiflesh', 'Grainsboro', 'Off White', 'Ivory'];
// for (let color = 0; color < colors.length; color++) {
//     console.log(`My #${color + 1} choice is ${colors[color]}`)
// }

//Exercise 3
/* 1) Prompt the user for a number.
Hint : Check the data type you receive from the prompt (ie. Use the typeof method) */

// let userInput;
// do {
//     userInput = prompt("Please enter a number:");
// } while (userInput < 10);

// console.log("Number is greater than or equal to 10.");

// Exercise 4 
// 1) Console.log the number of floors in the building.

// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// }

// console.log(building.numberOfFloors);
// console.log(`${building.numberOfAptByFloor.firstFloor} and ${building.numberOfAptByFloor.thirdFloor}`);
// console.log(`${building.nameOfTenants[1]} and ${building.numberOfRoomsAndRent.dan[0]}`)

// const sarahDavidRent = building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1]
// if (sarahDavidRent > building.numberOfRoomsAndRent.dan[1]) {
//     building.numberOfRoomsAndRent.dan[1] += 200
// }
// console.log(building);


// Exercise 5 

// const family = {
//     fatherNname : 'Jack',
//     sonName : 'Jackson',
//     daughterName : 'JackDaughter'
// }

// for (key in family) {
//     console.log(key)
// }

// for (key in family) {
//     console.log(family[key])
// }

// Exercise 6 
// Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”

// const details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'raindeer'
//   }
// let sentence = ''
// for (key in details) {
//     sentence = sentence + ' ' + key + ' ' + details[key]
//     // console.log(sentence);
// }
// console.log(sentence);

// Exercise 7
/*A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
Hint: a string is an array of letters
Console.log the name of their secret society. The output should be “ABJKPS”*/
// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// let firstLetter = []
// for (let i = 0; i < names.length; i++) {
//         x = names[i].slice(0,1)
//         firstLetter.push(x)
//     }
// sortedLetters = firstLetter.sort()
// console.log(sortedLetters.join(''));



