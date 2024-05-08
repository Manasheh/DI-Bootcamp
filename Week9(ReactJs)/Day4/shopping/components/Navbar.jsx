import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div style={{display: 'flex'}}>
        <Link to='/'>HOME</Link>
        <Link to='/about'>ABOUT</Link>
        <Link to='/contact'>CONTACT</Link>
        <Link to='/shop'>SHOP</Link>
    </div>
  )
}

export default Navbar