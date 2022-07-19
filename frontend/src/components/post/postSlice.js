import { createSlice, createAsyncThunk, createEntityAdapter, createSelector } from '@reduxjs/toolkit';

export const fetchUniquePost = createAsyncThunk('/post/fetchUniquePost', async(id) => {
    let output;
    await fetch(`http://127.0.0.1:4000/db/getUniquePost?id=${id}`).then(res => res.json()).then((data) => {
        output = data[0]
    })
    return [{'id': output._id, ...output}]
})

const postAdapter = createEntityAdapter()
const initialState = postAdapter.getInitialState({})

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers : {
    }, extraReducers: (builder) => {
        builder
            .addCase(fetchUniquePost.fulfilled, (state, action) => {
                postAdapter.setAll(state, action.payload)
            })
    }
})

export default postSlice.reducer

export const { selectAll: selectPosts } = postAdapter.getSelectors(state => state.post)