
import { v4 as uuidv4 } from 'uuid'
export const ADD_TASK = 'add_task'
export const COMPLETE_TASK = "complete_task"
export const REMOVE_TASK = "remove_task"

const initialState = {
    tasks:[]
}

export const taskReducer = (state = initialState, action ) => {
    switch (action.type) {
        case ADD_TASK:
            const newTask = [...state.tasks]
            newTask.push({id : uuidv4(), task: action.payload, completed: false})
            return {...state, tasks: newTask}
        case COMPLETE_TASK:
            const newTasks = state.tasks.map(item => {
                return (item.id === action.id ? { ...item, completed: !item.completed } : item)
            })
            return {...state, tasks: newTasks}
        case REMOVE_TASK:
            const notDeleted = state.tasks.filter(item => item.id !== action.id)
            return {...state, tasks: notDeleted}
           
    
        default:
            return state;
    }
}
