import React, { useState, useReducer, useRef } from 'react'
import Counter from './components/Counter'

import './App.css'

const INCREMENT = 'increment'
const DECREMENT = 'decrement'
const ADD_TASK = 'add_task'
export const initialState = {
  count: 0,
  tasks: []
}

export const reducer = (state, action) => {
  // if(action.type === INCREMENT) {
  //   return {...state, count: state.count + 1}
  // } else if (action.type === DECREMENT) {
  //   return {...state, count: state.count - 1}
  // }
  // return state


  // OR 

  
  switch(action.type) {
    case INCREMENT:
      return {...state, count: state.count + action.payload};
      break;
    case DECREMENT:
      return {...state, count: state.count - action.payload};
      break;
    case ADD_TASK:
      const newTask = [...state.tasks]
      newTask.push({name: action.payload})
      return {...state, tasks: newTask}
    default: 
      return state;
  }
}


function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const inputRef = useRef('')
  const addTask = () => {
    dispatch({type: ADD_TASK, payload:inputRef.current.value})
    inputRef.current.value = ''
  }
  return (
    <>
      <div className="card">
        <h2>counter with useReducer</h2>
        <div>
        <button onClick={() => dispatch({type: INCREMENT, payload: 10})}>+</button>
        count is {state.count}
        <button onClick={() => dispatch({type: DECREMENT, payload: 5})}>-</button>
        </div>
      </div>
      <div>
        <h2>task</h2>
        <input ref = {inputRef}/><button onClick={() => addTask()}>add task</button>
      </div>
      <div>
        {state.tasks.map((item, index) => {
          return <div key={index}>{item.name}</div>
        })}
      </div>

      <Counter />
    </>
  )
}

export default App
