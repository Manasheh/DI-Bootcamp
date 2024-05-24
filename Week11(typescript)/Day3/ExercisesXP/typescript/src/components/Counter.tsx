import React from "react"

interface CounterProps {
    setCount: React.Dispatch<React.SetStateAction<number>>
    children: React.ReactNode
}
const Counter = ({children, setCount}: CounterProps) => {

    const add = () => {
        setCount((count) => count + 1)
    }

    const substract = () => {
        setCount((count) => count - 1)
    }
  return (
    <div>
      <h3>Counter</h3>
      <div>
      {children}
      </div>
      <button onClick={add}>+</button>
      <button onClick={substract}>-</button>
    </div>
  )
}

export default Counter
