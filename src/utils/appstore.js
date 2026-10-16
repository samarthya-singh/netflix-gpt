import { configureStore } from "@reduxjs/toolkit";
import userstore from "./userSlice"
import moviewstore from "./movieSlice"

const appstore = configureStore({
  reducer: {
    user: userstore,
    movie: moviewstore,
  },
});

export default appstore;