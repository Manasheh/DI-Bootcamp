const name = document.querySelector('#name')
const height = document.querySelector('#height')
const gender = document.querySelector('#gender')
const birthYear = document.querySelector('#birth_year')
const homeworld = document.querySelector('#homeworld')
const btn = document.querySelector('#btn')
const para = document.querySelector('#para')

const BASE_URL = 'https://www.swapi.tech/api/people/';

async function getDetails() {
    try {
        const res = await fetch(BASE_URL);
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`)
        const data = await res.json();
        let nestedData = data.results;
        if (nestedData.length === 0) {
            para.textContent = 'Oops... no data found'
        } else {
            randomData(nestedData)
        }
    } catch (error) {
        console.log('Error has occurred:', error)
        para.textContent = 'Error fetching data'
    }
}

async function randomData(data) {
    let getRandom = Math.floor(Math.random() * data.length)

    try {
        const newUrl = data[getRandom].url
        const res = await fetch(newUrl);
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`)
        const newData = await res.json();
        getData(newData);
    } catch (error) {
        console.log('There is an error with the URL', error)
    }
}

async function getData(data) {
    const homeWorld = data.result.properties.homeworld
    try {
        const res = await fetch(homeWorld)
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`)
        const homeworldData = await res.json();
        homeWorldName(homeworldData.result.properties.name);
    } catch (error) {
        console.log('There is an error with the homeworld URL', error)
    }

    name.textContent = `${data.result.properties.name}`
    height.textContent = `Height: ${data.result.properties.height}`
    gender.textContent = `Gender: ${data.result.properties.gender}`
    birthYear.textContent = `Birth Year: ${data.result.properties.birth_year}`
}

function homeWorldName(name) {
    homeworld.textContent = `Home World: ${name}`
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
    para.textContent = ''
    getDetails();
});















