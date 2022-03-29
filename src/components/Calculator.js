import CalcButton from "./CalcButton";
import styles from "./Calculator.module.css";
import Screen from "./Screen";

import { useDispatch, useSelector } from "react-redux";
import { totalActions } from "../store/total-slice";
import { symbols, nonNumSymbols, functionSymbols } from "../helpers/helpers";

const Calculator = () => {
  const dispatch = useDispatch();
  const squared = useSelector((state) => state.squared);

  const buttonClickHandler = (e) => {
    e.preventDefault();

    // if value is a number
    if (
      !nonNumSymbols.includes(e.target.value) &&
      !functionSymbols.includes(e.target.value) &&
      !squared
    ) {
      dispatch(totalActions.setValue(e.target.value));
    }
    if (
      !nonNumSymbols.includes(e.target.value) &&
      !functionSymbols.includes(e.target.value) &&
      squared
    ) {
      dispatch(totalActions.clearCalc());
      dispatch(totalActions.setValue(e.target.value));
    }
    // if value is + - / * %
    if (nonNumSymbols.includes(e.target.value)) {
      dispatch(totalActions.setSymbol(e.target.value));
    }

    // if value is = . C CE ⌫
    if (functionSymbols.includes(e.target.value)) {
      dispatch(totalActions.setFuncSymbol(e.target.value));
    }
  };

  const buttons = symbols.map((sym, i) => {
    return (
      <CalcButton value={sym} key={i} onClick={buttonClickHandler}>
        {sym}
      </CalcButton>
    );
  });

  return (
    <div className={styles.calculator}>
      <Screen />
      {buttons}
    </div>
  );
};

export default Calculator;
