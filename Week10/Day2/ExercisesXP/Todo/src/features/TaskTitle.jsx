import React from 'react'
import { useSelector } from 'react-redux'

function TaskTitle(props) {
    const tasks = useSelector(state => state.taskReducer.tasks)
  return (
    <div>
      <h2>Number Of Task {tasks.length}</h2>
    </div>
  )
}

export default TaskTitle