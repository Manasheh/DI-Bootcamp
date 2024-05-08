import React from 'react'
import { Link } from 'react-router-dom'
function Nav(props) {
  return (
    <header>
      <nav>
        <Link to = '/'>HOME</Link>{' '}
        <Link to='/about#section1'>ABOUT</Link>{' '}
        <Link to='/contact'>CONTACT</Link>{' '}
        <Link to='/shop'>SHOP</Link>
      </nav>
    </header>
  )
}

export default Nav