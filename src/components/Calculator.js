import CalcButton from "./CalcButton";
import styles from "./Calculator.module.css";
import Screen from "./Screen";

import { useDispatch } from "react-redux";
import { totalActions } from "../store/total-slice";
import { symbols, nonNumSymbols } from "../helpers/helpers";

const Calculator = () => {
  const dispatch = useDispatch();

  const buttonClickHandler = (e) => {
    e.preventDefault();

    if (!nonNumSymbols.includes(e.target.value)) {
      dispatch(totalActions.setValue(+e.target.value));
    } else {
      dispatch(totalActions.setValue(e.target.value));
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
