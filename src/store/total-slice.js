import { createSlice } from "@reduxjs/toolkit";

const initialTotalState = {
  total: 0,
  currentValue: null,
  initialValue: null,
  secondValue: null,
  symbol: null,
  funcSymbol: null,
  calculationFinished: false,
  squared: false,
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

      if (action.payload === "x²") {
        totalSlice.caseReducers.square(state);
        state.squared = true;
      }
      if (state.funcSymbol === "CE") console.log("ce");
    },
    setFuncSymbol(state, action) {
      state.funcSymbol = action.payload;

      if (action.payload === "CE" && state.initialValue && !state.secondValue) {
        state.initialValue = null;
        state.symbol = null;
      }
      if (action.payload === "CE" && state.initialValue && state.secondValue) {
        state.secondValue = null;
      }

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
        : action.payload === "⌫"
        ? totalSlice.caseReducers.backspace(state)
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
      state.squared = false;
    },
    add(state) {
      state.total = +state.initialValue + +state.secondValue;
      state.total = state.total.toLocaleString();
      state.calculationFinished = true;
    },
    subtract(state) {
      state.total = +state.initialValue - +state.secondValue;
      state.total = state.total.toLocaleString();
      state.calculationFinished = true;
    },
    divide(state) {
      state.total = +state.initialValue / +state.secondValue;
      state.total = state.total.toLocaleString();
      state.calculationFinished = true;
    },
    multiply(state) {
      state.total = +state.initialValue * +state.secondValue;
      state.total = state.total.toLocaleString();
      state.calculationFinished = true;
    },
    square(state) {
      console.log("runs");
      state.total = +state.initialValue * state.initialValue;
      state.total = state.total.toLocaleString();
      state.squared = true;
      state.calculationFinished = true;
    },
    backspace(state) {
      console.log(state.secondValue);
      if (state.secondValue) {
        state.secondValue = state.secondValue.slice(0, -1);
        state.secondValue === "" ? (state.secondValue = null) : console.log();
        return;
      }
      if (state.initialValue && state.symbol && !state.secondValue) {
        state.symbol = null;
        return;
      }
      if (state.initialValue && !state.symbol) {
        state.initialValue = state.initialValue.slice(0, -1);
        state.initialValue === "" ? (state.initialValue = null) : console.log();
      }
    },
  },
});

export const totalActions = totalSlice.actions;
export default totalSlice;
