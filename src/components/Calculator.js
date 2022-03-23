import Backdrop from "./UI/Backdrop";
import CalcButton from "./CalcButton";
import styles from "./Calculator.module.css";
import Screen from "./Screen";

const symbols = [
  "%",
  "CE",
  "C",
  "⌫",
  7,
  8,
  9,
  "÷",
  4,
  5,
  6,
  "x",
  1,
  2,
  3,
  "-",
  "+",
  0,
  ".",
  "=",
];

const Calculator = () => {
  const buttons = symbols.map((sym) => {
    return <CalcButton>{sym}</CalcButton>;
  });

  return (
    <div className={styles.calculator}>
      <Screen />
      {buttons}
    </div>
  );
};

export default Calculator;
