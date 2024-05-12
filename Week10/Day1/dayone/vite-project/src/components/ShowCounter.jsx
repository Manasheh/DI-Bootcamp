import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'
import { DisplayContext } from './Display'
function ShowCounter() {
    const {count} = useContext(AppContext)
    const { title } = useContext(DisplayContext)
  
  return (
    <>
        <div>ShowCounter</div>
        <h1>{title}</h1> 
        {count}
    </>
  )
}

export default ShowCounter