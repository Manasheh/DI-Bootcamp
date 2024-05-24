import React from "react";

interface CountProps {
    // count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    children: React.ReactNode;
}
const Counter = ({children, setCount}: CountProps) => {
    // const [count, setCount] = useState<number>(0)
  return (
    <div>
      <h2>Counter</h2>
      <div>
      {/* {count} */}
      {children}
      </div>
      <button onClick={() => setCount(count => count + 1)}>+</button>
      <button onClick={() => setCount(count => count - 1)}>-</button>
    </div>
  )
}

export default Counter
