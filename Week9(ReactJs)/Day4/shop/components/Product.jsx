import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate, NavLink } from 'react-router-dom'
function Product() {
    const [product, setProduct] = useState([])
    const params = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        getProduct()
    }, [])
    const getProduct = async () => {
        try {
            const res = await fetch(`http://localhost:3001/api/products/${params.id}`)
            const data = await res.json()
            setProduct(data)
        } catch (error) {
            navigate('/') // if error navigate to home, without having to click
            console.log(error.message);
        }
    }

    const backToHome = () => {
        navigate('/')
    }
  return (

  
    <div>
          <h2>Delete Product</h2>
          <h2>Update Product</h2>
        <h2>Products</h2>
        {
            product.map((item) => {
                return (
                    <div key={item.id}>
                    <h2>{item.name}</h2>
                    <h2>{item.price}</h2>
                    <Link to={'/'}>Continue shopping</Link>
                </div>
                )
            })
        }
        <button onClick={backToHome}>Back to Home</button>
    </div>
  )
}

export default Product