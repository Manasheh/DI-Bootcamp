import { configureStore } from '@reduxjs/toolkit' 
import {cakeReducer} from './cakeReducer'

const store = configureStore({
    reducer: {
        cake: cakeReducer
    }
})

export default store