import React from 'react'
import { REMOVE_TASK } from './tasksReducer'
import { useDispatch } from 'react-redux'

function TaskRemove(props) {
    const dispatch = useDispatch()
    const removeTask = () => {
        dispatch({type: REMOVE_TASK, id: props.id})
      }
    
  return (
    <button onClick={() => removeTask()}>-</button>
  )
}

export default TaskRemove