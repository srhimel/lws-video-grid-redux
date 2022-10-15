import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import getTags from './tagsAPI'

const initialState = {
  tags: [],
  isLoading: false,
  isError: false,
  error: ''
}
export const fetchTags = createAsyncThunk('tags/fetchTags', async () => {
  return await getTags()
})

const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchTags.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchTags.fulfilled, (state, action) => {
      state.isLoading = false
      state.tags = action.payload
      state.isError = false
    })
    builder.addCase(fetchTags.rejected, (state, action) => {
      state.isLoading = false
      state.tags = []
      state.isError = true
      state.error = action.error.message
    })
  }
})

export default tagsSlice.reducer
