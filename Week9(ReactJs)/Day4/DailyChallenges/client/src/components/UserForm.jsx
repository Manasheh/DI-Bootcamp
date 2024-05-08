import React from 'react'

function UserForm(props) {
    const handleSubmit =async (e) => {
        e.preventDefault()
        const messageInput = document.getElementById('search')
        const message = messageInput.value
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message })
         
        }
        const url = 'http://localhost:3001/api/world'
        try {
            const resJson = await fetch(url, options)
            const res = await resJson.json()
            console.log('res', res); 
            props.setMessage(res.message)
            messageInput.value = ''
        } catch (error) {
            console.log(error);
        }
       
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder='something here' id='search'/>
            <input type="submit" value='Submit' />
        </form>
    </div>
  )
}

export default UserForm