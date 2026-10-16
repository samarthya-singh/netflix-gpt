import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: [],
  reducers: {
    adduser: (state, action) => {
      state.push(action.payload);      
    },
    removeUser: (state, action) => {
      return null
      
    }

  }
})


export const { adduser, removeUser } = userSlice.actions;

export default userSlice.reducer;