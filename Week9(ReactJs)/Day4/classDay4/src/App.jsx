import React from 'react'
import Form from './Components/Form'
import Home from './Components/Home'
import About from './Components/About'
import Shop from './Components/Shop'
import Nav from './Components/Nav'
import Product from './Components/Product'
import { Routes, Route, Link } from 'react-router-dom'

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element = {<Form />}/>
        <Route path='/shop' element = {<Shop />}/>
        <Route path='/product/:id' element = {<Product />}/>
        <Route path='*' element = {<><h2>404 Not found</h2></>}/>
      </Routes>
    </>
  )
}

export default App
