// const {sum, multiply } = require('./math') 
const {getUsers} = require('./users')

// console.log(sum(2,4));
// console.log(multiply(2,2));
// getUsers('https://jsonplaceholder.typicode.com/users')
// .then(res => console.log(res))
// .catch(err => console.log(err))


// OR using await 
async function users() {
    let users = await getUsers('https://jsonplaceholder.typicode.com/users')
    console.log(users);

}

users()