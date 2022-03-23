import { createSlice } from "@reduxjs/toolkit";

const initialState = { total: 0, currentValue: null };

const totalSlice = createSlice({
  name: "total",
  initialState: initialState,
  reducers: {
    add(state) {
      console.log(state);
    },
  },
});

export const totalActions = totalSlice.actions;
export default totalSlice;
