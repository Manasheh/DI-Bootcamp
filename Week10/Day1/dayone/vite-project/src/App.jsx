// import React, { useState, createContext } from 'react'
// import Action from './components/Action'
// import Display from './components/Display'
import './App.css'
// export const AppContext = createContext()

// function App() {
//   const [count, setCount] = useState(0)
//   return (
//     <div>
//       <AppContext.Provider value={{count, setCount}}>
//         <Display />
//         <Action />
//         {/* <Display count = {count} />
//         <Action count = {count} setCount = {setCount}/> */}
//       </AppContext.Provider>
//     </div>
//   )
// }

// export default App


import React , {useRef, useState, useEffect} from 'react'

function App() {
  // const divRef = useRef()
  // const h2Ref = useRef()
  // const inputRef = useRef()

  // useEffect(() => {
  //   console.log(divRef.current);
  //   divRef.current.style.color = 'red'
  // }, [])

  // const changeToBlue = () => {
  //   h2Ref.current.style.color = 'blue'
  // }

  // const handleChange = (e) => {
  //   // inputRef.current = e.target.value
  //   console.log(inputRef.current.value);
  // }
  const [title, setTitle] = useState('my title')
  let name = 'Dan'
  const nameRef = useRef('Dan ref')
  const changeName = () => {
    name = 'John',
    nameRef.current = 'John Ref'
    console.log(nameRef.current);
    console.log(name);
  }
  const changeTitle = () => {
    setTitle('new title')
  }
  return (

    <div>
      {/* <h2 ref = {h2Ref}>useRef</h2>
      <button onClick={changeToBlue}>Change to blue</button>
      <div>
        <input type="text" onChange={handleChange} ref={inputRef}/>
      </div> */}
      <button onClick={changeName}>Change name</button>
      {name}
      <div>
        <h1>{nameRef.current}</h1>
        <button onClick={changeName}>Change name ref</button>
      </div>
      <div>
        <h1>{title}</h1>
        <button onClick={changeTitle}>change title</button>
      </div>
    </div>
  )
}

export default App
