import {useSelector, useDispatch} from 'react-redux'
import { increment, decrement, reset } from './counterSlice'
const Counter = (props)=>{
  const dispatch = useDispatch()
  
  const count = useSelector((state)=> state.counter.count)


  return(
    <>
    <h2>Count: {count}</h2>
    <button onClick={()=> dispatch(increment())}>+</button>
    <button onClick={()=> dispatch(decrement())}>-</button>
    <button onClick={()=> dispatch(reset())}>Reset</button>
    <div>
      <input type = 'number'/> <button>Increment By Number</button>
    </div>
    </>
  )
}

export default Counter