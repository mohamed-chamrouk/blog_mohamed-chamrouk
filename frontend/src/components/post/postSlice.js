import { createSlice, createAsyncThunk, createEntityAdapter, createSelector } from '@reduxjs/toolkit';

export const fetchUniquePost = createAsyncThunk('/post/fetchUniquePost', async (id) => {
    let output;
    await fetch(`http://127.0.0.1:4000/db/getUniquePost?id=${id}`).then(res => res.json()).then((data) => {
        output = data[0]
    })
    return [{ 'id': output._id, ...output }]
})

const postAdapter = createEntityAdapter()
const initialState = postAdapter.getInitialState({
    post: { "_id": "none", "title": "Post loading...", "content": "", "hidden": true, "pinned": false, "tags": [""], "postTime": "", "author": "" }
})

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
    }, extraReducers: (builder) => {
        builder
            .addCase(fetchUniquePost.fulfilled, (state, action) => {
                state.name = action.payload
            })
    }
})

export const selectPost = state => state.post.name

export default postSlice.reducer