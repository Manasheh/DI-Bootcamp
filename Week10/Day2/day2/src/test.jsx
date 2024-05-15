import React, { useReducer } from 'react'
import { initialState, reducer } from './App' 
function test() {
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <h1>test</h1>
    </div>
  )
}

export default test