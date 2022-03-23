import CalcButton from "./CalcButton";
import styles from "./Calculator.module.css";
import Screen from "./Screen";

import { useDispatch } from "react-redux";
import { totalActions } from "../store/total-slice";
import { symbols } from "../helpers/helpers";

const Calculator = () => {
  const dispatch = useDispatch();

  const buttonClickHandler = (e) => {
    e.preventDefault();

    dispatch(totalActions.add());
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
