import { useMemo, useRef, useState} from 'react'
import './App.css'
// import Heading from './components/Heading'
// import Section from './components/Section'
// import Counter from './components/Counter'
// import List from './components/List'

type fibFunc = (n: number) => number
const fib: fibFunc = (n) => {
  if (n <= 2) return n
  return fib(n - 1) + fib(n - 2)
}

const myNum: number = 30
function App() {
    // const [count, setCount] = useState<number>(0)
    const [count, setCount] = useState<number>(0)

    //using useRef
    const inputRef = useRef<HTMLInputElement>(null)  
    console.log(inputRef.current?.value);
    const numRef = useRef<number>(10)
    console.log(numRef.current);
    const fibResult = useMemo<number>(() => fib(myNum), [myNum])
    const handleChange = (e: any):void => {
      console.log(e.target.value);
    }

    const add = (e : any) => {
      console.log(e);
      
    }

  

  return (
    <>
      /*useRef 🇪🇬 */
      <input ref = {inputRef} type = 'text' onChange={handleChange}/>
      <button onClick={add}>Click</button>
      {fibResult}

      {/* <h2>TypeScript</h2>
      <Heading title = 'My Header'/>
      <Section content = 'my content'>
        <Heading title = 'this is my children'/>
      </Section>
      <Counter setCount = {setCount}>
        <h2>{count}</h2>  //this is the children pass to counter component
      </Counter>
      <List items = {['Dan', 'John', 'Mark']} /> */}
    </>
  )
}

export default App
