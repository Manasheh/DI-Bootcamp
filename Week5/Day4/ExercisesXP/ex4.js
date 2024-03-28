// let form = document.forms[0]
// form.lastElementChild.addEventListener('submit', getRadius())
// function getRadius() {
    

//     // console.log(form.elements.radius.value);
//     let r = form.elements.radius.value
//     console.log(r);
// }

// getRadius(3)

// // getRadius()

// function calculateVolume(radius) {
//     return vol = 4/3 * 3.14 * (radius ** 3)
    
// }
// // console.log('hello');


// function displayVolume(volume) {
//     return forms.element.volume.value = volume;
// }
// function calculateAndOupt() {
//     let radius = getRadius(e)
//     let volume = calculateVolume(radius)
//     displayVolume(volume)
// }
// calculateAndOupt()

// console.log('helo');

// let myForm = document.forms
// let radius = document.querySelector('#radius')
// let volume = document.querySelector('#volume')
// let calculate = document.querySelector('#submit')



// calculate.addEventListener('click', calculateVolume())

// function getRadius(e) {
//     e.preventDefault()
//     return radius.value
// }

// function calculateVolume() {
//     let r = getRadius(e)
//     let vol = 4/3 * 3.14 * (r**3)
//     volume.value = vol
// }



let myForm = document.forms[0]; // Select the first form element
let radius = document.querySelector('#radius');
let volume = document.querySelector('#volume');
let calculate = document.querySelector('#submit');

calculate.addEventListener('click', calculateVolume);

function getRadius() {
    return radius.value; 
}

function calculateVolume(e) {
    e.preventDefault(); // Prevent the default form submission
    let r = getRadius();
    let vol = (4/3) * Math.PI * (r**3); // Use Math.PI for better precision
    volume.value = vol.toFixed(2); // Round the result to two decimal places
}

