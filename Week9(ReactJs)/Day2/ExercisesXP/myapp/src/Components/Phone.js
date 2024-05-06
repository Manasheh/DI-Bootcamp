import React, { useState } from 'react'

function Phone() {
    const [phone, setPhone] = useState({
        brand: "Samsung",
        model: "Galaxy S20",
        color: "black",
        year: 2020
    })
    const changeColor = () => {
        setPhone(prevState => ({
            ...prevState, 
            color: 'blue'
        }))
    }
  return (
    <div>
        <h1>My phone is a {phone.brand}</h1>
        <p>It is {phone.color} {phone.model} from {phone.year}</p>
        <button onClick = {changeColor}>Change Color</button>
    </div>
  )
}

export default Phone