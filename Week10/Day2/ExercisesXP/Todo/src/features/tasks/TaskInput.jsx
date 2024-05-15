import React, {useRef} from 'react'
import {  useDispatch } from 'react-redux'
import { 
    ADD_TASK,
  } from './tasksReducer'
function TaskInput() {
    const addRef = useRef()
    const dispatch = useDispatch()
    // const taskInput = useSelector(state => state.reducer.tasks)
    const addTask = () => {
        if(addRef.current.value.trim() === '') {
          return 
        }
        dispatch({type: ADD_TASK, payload: addRef.current.value})
        addRef.current.value = ''
      }
  return (
    <div>
        <input placeholder='add new task' ref = {addRef}/>
        <button onClick={() => addTask()} >Add Task</button>
      </div>
  )
}

export default TaskInput