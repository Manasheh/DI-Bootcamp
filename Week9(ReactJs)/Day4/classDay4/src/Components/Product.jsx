import React from 'react'
import { useParams } from 'react-router-dom'
function Product(props) {
    const params = useParams()
    console.log(params);
  return (
    <>
        <h2>Product {params.id}</h2>
    </>
  )
}

export default Product