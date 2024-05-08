import React from 'react'
import { Link } from 'react-router-dom'

function Shop(props) {
  return (
    <>
    <div>
        <h2>Product one</h2>
        <Link to='/product/1'>Buy</Link>
    </div>
    <div>
        <h2>Product two</h2>
        <Link to='/product/2'>Buy</Link>
    </div>

    </>
  )
}

export default Shop