import { useState } from 'react'
import './App.css'

function App() {
  const [numOne, setNumOne] = useState('')
  const [numTwo, setNumTwo] = useState('')
  const [result, setResult] = useState(0)
  const [operation, setOperation] = useState('add')
  const body = document.body
  body.style.backgroundColor = 'brown'
  const handleOneChange = (e) => {
    setNumOne(e.target.value)
  }
  const handleTwoChange = (e) => {
    setNumTwo(e.target.value)
  }

  const operationHandler = (e) => {
    setOperation(e.target.value)
  }
  const calcHandler = () => {
    const one = parseFloat(numOne)
    const two = parseFloat(numTwo)
  
    let newResult;
    switch(operation) {
      case 'add':
        newResult = one + two;
        break;
      case 'minus':
        newResult = one - two;
        break;
      case 'divide':
        newResult = one / two;
        break;
      case 'multiply':
        newResult = one * two;
        break;
      default:
        newResult = 'Invalid operation'
    }
    setResult(newResult.toString())
    setNumOne('')
    setNumTwo('')
  }
  return (
    <div className="app-container">
      <h2>Basic Calculations</h2>      
      <div style={{display: 'flex', gap: '1.5rem'}} className="input-container">
        <input
          type="text"
          style={{fontSize:'2rem', width:'25%'}}
          onChange={handleOneChange}
          value={numOne}
           />
        <input
          type="text"
          style={{fontSize:'2rem', width:'25%'}}
          onChange={handleTwoChange}
          value={numTwo}
           />
      </div>
      <div class="input-field col s12" style={{margin: 'auto', width:'45%'}}>
          <select className='browser-default' onChange = {operationHandler} value={operation}>
            <option value="" disabled selected>Choose your option</option>
            <option value="add">Add</option>
            <option value="minus">Substract</option>
            <option value="multiply">Multiply</option>
            <option value="divide">Divide</option>
          </select>
      </div>
      <div style={{textAlign: 'center', marginTop: '2rem'}}>
        <a class="waves-effect waves-light btn" onClick={calcHandler} style={{color: 'brown', backgroundColor: 'white', fontWeight: 'bold'}} >Calc</a>
      </div>
      <p className='result' style={{fontSize:'2rem'}}>{result}</p>
    </div>
  )
}

export default App
