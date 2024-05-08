import React from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Home from '../components/Home'
import Navbar from '../components/Navbar'
import Product from '../components/Product'
import Shop from '../components/Shop'
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path='/' element = {<Home />}></Route>
            <Route path='/contact' element = {<Contact />} />
            <Route path='/about' element = {<About />} />
            <Route path ='shop' element = {<Shop />}/>
            <Route path='/:id'element = {<Product />}/>
        </Routes>
    </div>
  )
}

export default App