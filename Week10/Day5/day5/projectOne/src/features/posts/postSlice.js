import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const POST_URL = 'https://jsonplaceholder.typicode.com/posts'

export const fetchPosts = createAsyncThunk('posts/fetchposts', async () => {
    const response = await axios.get(POST_URL)
    return response.data
})

const initialState = {
    posts:[],
    status: '' // loading, success, fail
}

const postsSlice = createSlice({
    name: 'posts', 
    initialState
})

export const posts = (state) => state.postsReducer.posts;
export default postsSlice.reducer
