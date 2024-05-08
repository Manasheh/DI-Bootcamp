import React from 'react'
import { Link } from 'react-router-dom'
function Shop() {
  return (
    <div>
        <div style={{textAlign: 'center'}}>
            <h2>Product one</h2>
            <Link to='/1'>Buy!</Link>
        </div>
        <div style={{textAlign: 'center'}}>
            <h2>Product Two</h2>
            <Link to='/2'>Buy!</Link>
        </div>
    </div>
  )
}

export default Shop