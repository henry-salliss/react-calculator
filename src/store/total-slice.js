import { createSlice } from "@reduxjs/toolkit";

const initialTotalState = {
  total: 0,
  currentValue: null,
  initialValue: null,
  secondValue: null,
  symbol: null,
};

const totalSlice = createSlice({
  name: "total",
  initialState: initialTotalState,
  reducers: {
    setValue(state, action) {
      state.currentValue = action.payload;

      if (state.initialValue === null) state.initialValue = action.payload;
      if (state.initialValue != null) state.secondValue = action.payload;
    },
    setSymbol(state, action) {
      state.symbol = action.payload;

      action.payload === "C"
        ? totalSlice.caseReducers.clearCalc(state)
        : console.log("");
    },
    clearCalc(state) {
      state.total = 0;
      state.currentValue = null;
      state.initialValue = null;
      state.secondValue = null;
      state.symbol = null;
    },
  },
});

export const totalActions = totalSlice.actions;
export default totalSlice;
