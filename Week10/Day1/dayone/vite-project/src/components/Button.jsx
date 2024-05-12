import { AppContext } from '../App'
import { useContext } from 'react'
import ButtonTwo from './ButtonTwo'
function Button() {
   const {count, setCount} = useContext(AppContext)

  return (
    <>  
        <h2>button</h2>
        <button onClick = {() => setCount(count + 1)}>Add</button>
        <ButtonTwo />
    </>
  )
}

export default Button