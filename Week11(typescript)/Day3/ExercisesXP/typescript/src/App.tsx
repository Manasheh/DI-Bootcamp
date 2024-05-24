import { useState } from 'react'
import Greeting from './Greeting'
import Counter from './components/Counter'
import UserCard from './components/UserCard'
import FetchData from './components/FetchData'
import './App.css'
function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <>
      <Greeting name = "John" />
      <Counter setCount = {setCount}>
        {count}
      </Counter>
      <UserCard name = "John" age = {25} /> 
      <FetchData />
    </>
  )
}

export default App
