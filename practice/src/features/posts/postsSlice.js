import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../../api/client'

const initialState = {
    posts: []    
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
      postAdded: {
        reducer(state, action) {
          state.posts.push(action.payload)
        },
        prepare(title, content, userId) {
          // omit prepare logic
        }
      }      
    }
  })

  export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await client.get('https://dummyjson.com/products')
    return response.data
  })
  
  export const { postAdded } = postsSlice.actions
  
  export default postsSlice.reducer
  
  export const selectAllPosts = state => state.posts.posts
  
  export const selectPostById = (state, postId) =>
    state.posts.posts.find(post => post.id === postId)