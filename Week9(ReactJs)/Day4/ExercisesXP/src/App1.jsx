import React from 'react'

function App1() {

   
const handleClick = async () => {
    // console.log('click');
    try {
        const url = 'https://webhook.site/5eada9a6-bded-409b-8171-73b57f88e0bf'
        const body = {
            key1: 'myusername',
            email: 'mymail@gmail.com',
            name: 'Isaac',
            lastname: 'Doe',
            age: 27
        }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(body)
        }
        const res = await fetch(url, options)
        // console.log('res', res);
        const resJson = await res.json()
    } catch (error) {
        console.log(error.message);
    }

}
  return (
    <div>
        <button onClick={handleClick}>Post Data</button>
    </div>
  )
}

export default App1