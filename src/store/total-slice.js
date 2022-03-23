import { createSlice } from "@reduxjs/toolkit";

const initialTotalState = { total: 0, currentValue: 0 };

const totalSlice = createSlice({
  name: "total",
  initialState: initialTotalState,
  reducers: {
    setValue(state, action) {
      state.currentValue = action.payload;
    },
  },
});

export const totalActions = totalSlice.actions;
export default totalSlice;
