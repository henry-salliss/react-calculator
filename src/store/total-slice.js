import { createSlice } from "@reduxjs/toolkit";

const initialTotalState = {
  total: 0,
  currentValue: null,
  initialValue: null,
  secondValue: null,
  symbol: null,
  funcSymbol: null,
  calculationFinished: false,
};

const totalSlice = createSlice({
  name: "total",
  initialState: initialTotalState,
  reducers: {
    setValue(state, action) {
      state.currentValue = action.payload;

      // first value added if first value does not exist and no symbol
      if (state.initialValue === null) {
        state.initialValue = action.payload;
        return;
      }
      // add multiple digit number for first value
      if (state.initialValue && !state.symbol) {
        state.initialValue = state.initialValue + String(action.payload);
      }

      // second value added only if first value and symbol exist
      if (state.initialValue && state.symbol && state.secondValue === null) {
        state.secondValue = action.payload;
        return;
      }

      if (state.secondValue) {
        state.secondValue = state.secondValue + String(action.payload);
      }
    },
    setSymbol(state, action) {
      state.symbol = action.payload;
    },
    setFuncSymbol(state, action) {
      state.funcSymbol = action.payload;

      action.payload === "C"
        ? totalSlice.caseReducers.clearCalc(state)
        : action.payload === "=" && state.symbol === "+"
        ? totalSlice.caseReducers.add(state)
        : action.payload === "=" && state.symbol === "-"
        ? totalSlice.caseReducers.subtract(state)
        : action.payload === "=" && state.symbol === "/"
        ? totalSlice.caseReducers.divide(state)
        : action.payload === "=" && state.symbol === "x"
        ? totalSlice.caseReducers.multiply(state)
        : console.log("");
    },
    clearCalc(state) {
      state.total = 0;
      state.currentValue = null;
      state.initialValue = null;
      state.secondValue = null;
      state.symbol = null;
      state.funcSymbol = null;
      state.calculationFinished = false;
    },
    add(state) {
      state.total = +state.initialValue + +state.secondValue;
      state.calculationFinished = true;
    },
    subtract(state) {
      state.total = +state.initialValue - +state.secondValue;
      state.calculationFinished = true;
    },
    divide(state) {
      state.total = +state.initialValue / +state.secondValue;
      state.calculationFinished = true;
    },
    multiply(state) {
      state.total = +state.initialValue * +state.secondValue;
      state.calculationFinished = true;
    },
  },
});

export const totalActions = totalSlice.actions;
export default totalSlice;
