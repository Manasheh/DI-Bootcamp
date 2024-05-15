import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TaskTitle from '../TaskTitle'
import TaskInput from './TaskInput'
import TaskRemove from './TaskRemove'
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
  
  const taskCompleted =(id) => {
    dispatch({type: COMPLETE_TASK, id: id})
  }

  const filterTask = tasks.filter(task => {
    if(filter === 'completed') return task.completed
    else if (filter === 'active') return !task.completed
    return task
  })

  return (
    <div>
      <TaskTitle />
      <TaskInput />
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
              <TaskRemove id = {item.id} />
            </div>
          )
        })
      }
    </div>
  )
}


export default TaskList