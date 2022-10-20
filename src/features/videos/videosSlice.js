import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import getVideos from './videosAPI'

const initialState = {
  videos: [],
  isLoading: false,
  isError: false,
  error: ''
}

export const fetchVideos = createAsyncThunk(
  'videos/fetchVideos,',
  async ({ tags, search }) => await getVideos(tags, search)
)

const videosSlice = createSlice({
  name: 'videos',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchVideos.pending, (state) => {
      state.isError = false
      state.isLoading = true
    })
    builder.addCase(fetchVideos.fulfilled, (state, action) => {
      state.isLoading = false
      state.videos = action.payload
      state.isError = false
    })
    builder.addCase(fetchVideos.rejected, (state, action) => {
      state.isLoading = false
      state.videos = []
      state.isError = true
      state.error = action.error.message
    })
  }
})

export default videosSlice.reducer
