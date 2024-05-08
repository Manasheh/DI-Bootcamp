import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Shop(props) {
    const [products, setProducts] = useState([])
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')

    useEffect(() => {
        getall()
    }, [])

    const getall = async() => {
        try {
            const res = await fetch('http://localhost:3001/api/products/')
            const data = await res.json()
            setProducts(data)
        } catch (error) {
            console.log(error.message);
        }
    }
    const add = async (e) => {
        e.preventDefault()

        const options = {
            method: 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, price})
        }
        try {
            const res = await fetch('http://localhost:3001/api/products', options)
            const data = await res.json()
            setProducts(data)
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <>
        <h2>Shop</h2>
        <h4>Add Product</h4>
        <form onSubmit={add}>
            <input onChange={(e) => setName(e.target.value)} placeholder='Product name'/>
            <input onChange={(e) => setPrice(e.target.value)} placeholder='Product price'/>
            <input type='submit' value={'add product'}/>
        </form>
        {
            products.map((item) => {
                    return ( 
                    <Link to={ `/${item.id}`}>
                    <div key={item.id} 
                            style={
                            {border: '1px solid #000',
                            margin: '20px',
                            padding: '5px'}
                    }>{item.name}
                    <p></p>
                Buy!
                    </div>
                    </Link>
                    )
            })
        }
    </>
  )
}

export default Shop