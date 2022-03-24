import styles from "./Screen.module.css";
import { useSelector } from "react-redux";

const Screen = () => {
  const currentValue = useSelector((state) => state.currentValue);

  const initialValue = useSelector((state) => {
    return state.initialValue;
  });
  const currentSymbol = useSelector((state) => state.symbol);

  const secondValue = useSelector((state) => state.secondValue);

  console.log(initialValue, secondValue, currentValue, currentSymbol);

  const calculation =
    initialValue && currentSymbol && secondValue === null
      ? 0
      : initialValue != null && currentSymbol === null && secondValue === null
      ? initialValue
      : initialValue && currentSymbol != null && secondValue === null
      ? initialValue + " " + currentSymbol
      : initialValue && currentSymbol && secondValue != null
      ? initialValue + " " + currentSymbol + " " + secondValue
      : "";

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
      <p className={styles.valueText}>
        {currentValue === null ? 0 : currentValue}
      </p>
    </div>
  );
};

export default Screen;
