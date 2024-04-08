// Exercise 1 and 2 
// Create a program to retrieve the data from the API URL provided above.
// Use the fetch() method to make a GET request to the Giphy API and Console.log the Javascript Object that you receive.
// Make sure to check the status of the Response and to catch any occuring errors.

// Read carefully the documention to understand all the possible queries that the URL accept.
// Use the Fetch API to retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
// Make sure to check the status of the Response and to catch any occuring errors.
// Console.log the Javascript Object that you receive.
// fetch('https://api.giphy.com/v1/gifs/search?q=sun&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=10', {
//     method: 'GET',
// })
// .then(res => res.json())
// .then(result => console.log(result))
// .catch(err => console.log(err))


// Exercise 3 
// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));

// Create an async function, that will await for the above GET request.
// The program shouldn’t contain any then() method.
// Make sure to check the status of the Response and to catch any occuring errors.
// async function starWars() {
//     const url = "https://www.swapi.tech/api/starships/9/"
//     const options = {
//         method: 'GET'
//     }
//    try {
//     let res = await fetch(url, options)
//     let data = await res.json()
//     console.log(data.message);
//     console.log(data.result)
//    } catch (error) {
//     console.log(error);
//    }
// }

// starWars()


// Exercise 4: Analyze 
// Analyse the code provided below - what will be the outcome? 

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

// it will first log 'calling' and after 2 seconds it will log the result that is 'resolve'



























// async function starWars() {
//     const url = "https://www.swapi.tech/api/starships/9/"
//     const options = {
//         method: 'GET',
//         headers :{
//             'Content-Type': 'application/json'
//         },
//         // body: JSON.stringify(url)
//     }
//     try {
//         let res = await fetch(url, options)
//         let data = await res.json()
//         console.log(data.message);
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// starWars()
