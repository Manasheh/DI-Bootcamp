import React, { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './task.css'
import { 
  ADD_TASK,
  COMPLETE_TASK,
  REMOVE_TASK
} from './tasksReducer'

function TaskList(props) {
  const [filter, setFilter ] = useState('all')
  const tasks = useSelector((state) => state.taskReducer.tasks)
  const dispatch = useDispatch()
  console.log(tasks);
  const addRef = useRef()
  const addTask = () => {
    if(addRef.current.value.trim() === '') {
      return 
    }
    dispatch({type: ADD_TASK, payload: addRef.current.value})
    addRef.current.value = ''
  }
  const taskCompleted =(id) => {
    dispatch({type: COMPLETE_TASK, id: id})
  }

  const filterTask = tasks.filter(task => {
    if(filter === 'completed') return task.completed
    else if (filter === 'active') return !task.completed
    return task
  })
  const removeTask = (id) => {
    dispatch({type: REMOVE_TASK, id})
  }

  return (
    <div>
      <h2>Task list {tasks.length}</h2>
      <div>
        <input placeholder='add new task' ref = {addRef}/>
        <button onClick={() => addTask()} >Add Task</button>
      </div>
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('active')}>Active</button>
      </div>
      {
        filterTask.map(item => {
          return(
            <div key={item.id}>
              <span className={item.completed ? 'completed': ''} onClick = {() => taskCompleted(item.id)}>{item.task}</span>
              <button onClick={() => removeTask(item.id)}>-</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default TaskList