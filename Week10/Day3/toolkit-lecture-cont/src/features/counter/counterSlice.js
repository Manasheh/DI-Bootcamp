import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
}

//the key names are import to keep the same
export const counterSlice = createSlice({
  name: 'counter', //every slice is a unique action. It will concated here
  initialState: initialState, //initialState key is a saved word in the createSlice function
  reducers: {
    //reducers contain the actions
    //action: counter/increment.
    //increment is the name of the action to dispatch
    increment: (state) => {
      state.count += 1 //new way, no need to clone the state

      // {...state, count: state.count + 1} old way
    },

    decrement: (state) => {
      state.count -= 1
    },
    reset: (state) => {
      state.count = 0
    },
  },
})

export const { increment, decrement, reset } = counterSlice.actions //way to dispatch the increment action
export default counterSlice.reducer
