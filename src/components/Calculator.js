import Backdrop from "./UI/Backdrop";
import CalcButton from "./UI/CalcButton";
import styles from "./Calculator.module.css";

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
    <Backdrop>
      <div className={styles.calculator}>{buttons}</div>
    </Backdrop>
  );
};

export default Calculator;
