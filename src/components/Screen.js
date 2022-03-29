import styles from "./Screen.module.css";
import { useSelector } from "react-redux";

const Screen = () => {
  const currentValue = useSelector((state) => state.currentValue);

  const initialValue = useSelector((state) => {
    return state.initialValue;
  });
  const currentSymbol = useSelector((state) => state.symbol);

  const secondValue = useSelector((state) => state.secondValue);

  const total = useSelector((state) => state.total);

  const funcSymbol = useSelector((state) => state.funcSymbol);

  const calculationFinished = useSelector((state) => state.calculationFinished);

  console.log(initialValue, currentSymbol, secondValue, total, funcSymbol);

  const calculation = `${initialValue ? initialValue.toLocaleString() : ""} ${
    currentSymbol ? currentSymbol : ""
  } ${secondValue ? secondValue : ""}`;

  return (
    <div className={styles.screen}>
      <div className={styles.topRow}>
        <p className={styles.symbolText}>{calculation}</p>
        <p
          className={
            currentSymbol === null ? styles.noSymbol : styles.symbolText
          }
        >
          {currentSymbol === null ? "_" : currentSymbol}
        </p>
      </div>
      <div className={styles.bottomRow}>
        <p className={styles.symbolText}>{calculationFinished ? total : ""}</p>
        <p className={styles.valueText}>
          {currentValue === null ? 0 : currentValue}
        </p>
      </div>
    </div>
  );
};

export default Screen;
