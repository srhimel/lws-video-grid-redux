import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import getRelatedVideos from './relatedVideosAPI'

const initialState = {
  relatedVideos: [],
  isLoading: false,
  isError: false,
  error: ''
}

export const fetchRelatedVideos = createAsyncThunk(
  'relatedVideos/fetchRelatedVideos,',
  async ({ tags, id }) => await getRelatedVideos({ tags, id })
)

const relatedVideosSlice = createSlice({
  name: 'relatedVideos',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchRelatedVideos.pending, (state) => {
      state.isError = false
      state.isLoading = true
    })
    builder.addCase(fetchRelatedVideos.fulfilled, (state, action) => {
      state.isLoading = false
      state.relatedVideos = action.payload
      state.isError = false
    })
    builder.addCase(fetchRelatedVideos.rejected, (state, action) => {
      state.isLoading = false
      state.relatedVideos = []
      state.isError = true
      state.error = action.error.message
    })
  }
})

export default relatedVideosSlice.reducer
