// let p = fetch('https://goweather.herokuapp.com/weather/Ny')

// fetch //
// async // await //

// fetch - returns a promise //
// fetch(url, {})

// fetch('https://jsonplaceholder.typicode.com/users', {
//     method: 'GET', // get is default so no need to put 
// })
// .then(response => {
//     console.log(response);
//     // response.json()
//     //response.text
//     return response.json()
// })
// .then(data => console.log(data)) 


// example from rapidapi

// let arr = []
// function getJoke() {
//     const url = 'https://jokes-always.p.rapidapi.com/erJoke';
//     const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'c8ff952aa1msh2dd19f415f495fcp1c8ebajsn506599df2860',
// 		'X-RapidAPI-Host': 'jokes-always.p.rapidapi.com'
// 	}
// };
// fetch(url, options)
// .then(res => {
//     // return res.text();
//     return res.json()
// })
// .then(joke => {
//     arr.push(joke)
//     console.log(arr);
//     console.log(joke.data)
// }) 
// .catch(err => console.log(err))
// }


// getJoke() 


// another example of using API 




// async //

// async function getX() {
//     return 5
// }
// async function getY() {
//     return 6
// }

// async function resolveX() {
//     let a = await getX()
//     let b = await getY() // basically what b does is, it is use instead of .then
//     console.log(a + b);
// }

// resolveX()


//using async and await, basically it is the same

// async function getJoke() {
//     const url = 'https://jokes-always.p.rapidapi.com/erJoke';
//     const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'c8ff952aa1msh2dd19f415f495fcp1c8ebajsn506599df2860',
// 		'X-RapidAPI-Host': 'jokes-always.p.rapidapi.com'
// 	}
// };
// try {
// let res = await fetch(url, options)
// let data = await res.json()
// console.log(data.data);
// } catch (error) {
//     console.log(error);
// }
// }
// getJoke()
// .then(res => {
//     // return res.text();
//     return res.json()
// })
// .then(joke => {
//     arr.push(joke)
//     console.log(arr);
//     console.log(joke.data)
// }) 
// .catch(err => console.log(err))
// }


// example on using post request 

// let post = {
//     userId: 6,
//     title: 'my title',
//     body : 'body bla bla'
// }

// let url = 'https://jsonplaceholder.typicode.com/posts'
// let options = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(post)
// }

// fetch(url, options)
// .then(res => res.json())
// .then(data => console.log(data))



// exercise

// const handleSubmit = (e) => {
//     e.preventDefault()
//     const name = e.target.name.value;
//     const username = e.target.username.value;
//     const email = e.target.email.value;
//     postAUser(name, username, email)
// };

// const postAUser = async (name, username, email) => {
//     let url = 'https://users-18kl.onrender.com/userjson'
//     let options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({name, username, email})
//     }
//     try {
//         const res = await fetch(url, options)
//         const data = await res.json()
//         // console.log(data);
//         let html = data.map(item => {
//             return `<div>${item.name}</div>`
//         })
//         document.getElementById('root').innerHTML = html.join('')
//     } catch (error) {
//         console.log(error);
//     }
// }


const url = 'https://chat-gtp-free.p.rapidapi.com/v1/chat/completions';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': '8e714f6b88mshbb20deb3af21b66p17c12cjsnb08e0581e35c',
		'X-RapidAPI-Host': 'chat-gtp-free.p.rapidapi.com'
	},
	body: {
		chatId: '92d97036-3e25-442b-9a25-096ab45b0525',
		messages: [
			{
				role: 'system',
				content: 'You are a virtual assistant. Your name is Karen and you would like to be a firefighter.'
			},
			{
				role: 'user',
				content: 'Hi, what\'s your name? What would you like to be when you grow up?'
			}
		]
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}