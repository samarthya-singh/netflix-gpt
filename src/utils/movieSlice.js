import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: null,
    trailerData:""
  },
  reducers: {
    addMovies: (state, action) => {
      state.nowPlaying = action.payload
    },
    addTrailerdata: (state, action) => {
      state.trailerData=action.payload
    }
  }

});
export const { addMovies, addTrailerdata } = movieSlice.actions;
export default movieSlice.reducer;