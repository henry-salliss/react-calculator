import styles from "./CalcButton.module.css";

const CalcButton = (props) => {
  return <button className={styles.button}>{props.children}</button>;
};

export default CalcButton;
