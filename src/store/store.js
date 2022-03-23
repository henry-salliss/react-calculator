import { configureStore } from "@reduxjs/toolkit";
import totalSlice from "./total-slice";

const store = configureStore({
  reducer: totalSlice.reducer,
});

export default store;
