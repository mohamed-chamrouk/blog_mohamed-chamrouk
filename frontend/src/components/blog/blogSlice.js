import { createSlice, createAsyncThunk, createEntityAdapter, createSelector } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('/blog/fetchPosts', async() => {
    let output;
    await fetch(`${process.env.REACT_APP_API_URL}/api/db/getPosts`).then(res => res.json()).then((data) => {
        output = data
    })
    return {'id': output.map((item) => item._id), 'entities': output}
})

const blogAdapter = createEntityAdapter()
const initialState = blogAdapter.getInitialState({})

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers : {
    }, extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.fulfilled, (state, action) => {
                blogAdapter.setMany(state, action.payload)
            })
    }
})

export default blogSlice.reducer

export const { selectAll: selectBlog } = blogAdapter.getSelectors((state) => state.blog)

export const selectIds = createSelector(selectBlog, (data) => {
    return data.map((post) => post._id)
})