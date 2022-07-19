import { configureStore } from '@reduxjs/toolkit'

import blogReducer from './components/blog/blogSlice'
import postReducer from './components/post/postSlice'

const store = configureStore({
    reducer: {
        blog: blogReducer,
        post: postReducer
    }
})

export default store