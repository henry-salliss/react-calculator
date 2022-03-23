import styles from "./Screen.module.css";
import { useSelector } from "react-redux";

const Screen = () => {
  const currentValue = useSelector((state) => {
    return state.currentValue;
  });
  console.log(currentValue);
  return <div className={styles.screen}>{currentValue}</div>;
};

export default Screen;
