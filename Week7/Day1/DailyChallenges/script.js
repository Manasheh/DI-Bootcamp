//1) Create two functions. Each function should return a promise.
// The first function called makeAllCaps(), takes an array of words as an argument
// If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
// else, reject the promise with a reason.
// The second function called sortWords(), takes an array of words uppercased as an argument
// If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
// else, reject the promise with a reason.


// function makeAllCaps(words) {
//     return new Promise((res, rej) => {
//         if (words.every(isString)) {
//             res(words.map(word => word.toUpperCase()))
//         }
//         else {
//             rej('Not all are string')
//         }
//     })
// }

// const words = ['hello', 'people', 'how', 'are', 'you']
// makeAllCaps(words)
// .then(res => sortWord(res))
// .then(res => console.log(res))
// .catch(err => console.log(err))

// function isString(arg) {
//     return typeof(arg) === 'string'
// }


// function sortWord(words) {
//     return new Promise((res, rej) => {
//         if (words.length >= 4) {
//             res(words.sort())
//         } 
//         else {
//             rej('SORRY, ARR TO SHORT')
//         }
//     })
// }


// Exercise 2
// Create three functions. The two first functions should return a promise..

// The first function is named toJs():
// this function converts the morse json string provided above to a morse javascript object.
// if the morse javascript object is empty, throw an error (use reject)
// else return the morse javascript object (use resolve)

// The second function called toMorse(morseJS), takes one argument: the new morse javascript object.

// This function asks the user for a word or a sentence.
// if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
// else
// The third function called joinWords(morseTranslation), takes one argument: the morse translation array

// this function joins the morse translation by using line break and display it on the page (ie. On the DOM

// const morse = {
//     "0": "-----",
//     "1": ".----",
//     "2": "..---",
//     "3": "...--",
//     "4": "....-",
//     "5": ".....",
//     "6": "-....",
//     "7": "--...",
//     "8": "---..",
//     "9": "----.",
//     "a": ".-",
//     "b": "-...",
//     "c": "-.-.",
//     "d": "-..",
//     "e": ".",
//     "f": "..-.",
//     "g": "--.",
//     "h": "....",
//     "i": "..",
//     "j": ".---",
//     "k": "-.-",
//     "l": ".-..",
//     "m": "--",
//     "n": "-.",
//     "o": "---",
//     "p": ".--.",
//     "q": "--.-",
//     "r": ".-.",
//     "s": "...",
//     "t": "-",
//     "u": "..-",
//     "v": "...-",
//     "w": ".--",
//     "x": "-..-",
//     "y": "-.--",
//     "z": "--..",
//     ".": ".-.-.-",
//     ",": "--..--",
//     "?": "..--..",
//     "!": "-.-.--",
//     "-": "-....-",
//     "/": "-..-.",
//     "@": ".--.-.",
//     "(": "-.--.",
//     ")": "-.--.-"
// };

// function toJs() {
//     return new Promise((res, rej) => {
//         if (Object.keys(morse).length === 0) {
//             rej('morse object is empty');
//         } else {
//             res(morse);
//         }
//     });
// }

// function toMorse(morse) {
//     const word = prompt('Enter a word');
//     return new Promise((res, rej) => {
//         if (!word.match(/^[a-z]+$/)) {
//             rej('Please type lowercase letters only.');
//         } else {
//             const morseArray = word.split('').map(letter => morse[letter]);
//             const result = { word: word, morse: morseArray };
//             res(result);
//         }
//     });
// }

// function joinWords(obj) {
//     const word = obj.word;
//     const morseArray = obj.morse;
//     const morseContainer = document.getElementById('morse');
//     const wordContainer = document.getElementById('word');

//     wordContainer.innerText = word;

//     morseArray.forEach((morseSign, i) => {
//         const p = document.createElement('p');
//         p.innerText = word[i] + ' = ' + morseSign;
//         morseContainer.appendChild(p);
//     });
// }

// toJs()
//     .then(morseObject => toMorse(morseObject))
//     .then(wordAndTranslation => joinWords(wordAndTranslation))
//     .catch(err => console.error(err));
