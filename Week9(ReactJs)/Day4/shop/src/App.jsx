import { Routes, Route, Link } from 'react-router-dom'
import Shop from '../components/Shop';
import Product from '../components/Product'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element= {<Shop />}></Route>
        <Route path='/:id' element= {<Product />}></Route>
      </Routes>
    </>
  )
}

export default App
