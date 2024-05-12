import React from 'react'
import { AppContext } from '../App'
import { useContext } from 'react'

function ButtonTwo() {
    const { count, setCount } = useContext(AppContext)
  return (
    <>
   
    <h2>button two</h2>
    <button onClick={() => setCount(count - 1)}>ButtonTwo</button>
    </>
  )
}

export default ButtonTwo