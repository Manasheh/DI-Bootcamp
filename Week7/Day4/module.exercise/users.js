

// async function getUsers(){
//     const url = 'https://jsonplaceholder.typicode.com/users'
//     try {
//         const res = await fetch(url)
//         const data = await res.json()
//         return data
//     } catch (error) {
//         console.log(error);
//     }
// }

// module.exports = {
//     getUsers
// }
 
const getUsers = async(url) => {
    try {
        const res = await fetch(url)
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error);
    }
}


module.exports = {getUsers}