import React, { useState } from 'react'

function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        
    }

    const changeHandler =(e) => {
        
    }
  return (
    <div>
        <h2>Form</h2>
        <form onSubmit={submitHandler}>
            <input 
            type="text"
            name = 'name'
            onChange={() => changeHandler(e.target.value)}
             />
            <input 
            type="email"
            name = 'email'
            onChange={() => changeHandler(e.target.value)}
             />
            <input type="submit"/>
        </form>
    </div>
  )
}

export default Contact