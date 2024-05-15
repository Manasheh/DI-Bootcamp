import { configureStore } from '@reduxjs/toolkit'
import { exampleReducer } from './reducer'


export default configureStore({
    reducer: {
        exampleReducer
    }
})