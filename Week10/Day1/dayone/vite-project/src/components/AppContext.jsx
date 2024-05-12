import React, { useState, createContext } from 'react'
import Action from './components/Action'
import Display from './components/Display'

export const AppContext = createContext()

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <AppContext.Provider value={{count, setCount}}>
        <Display />
        <Action />
        {/* <Display count = {count} />
        <Action count = {count} setCount = {setCount}/> */}
      </AppContext.Provider>
    </div>
  )
}

export default App
