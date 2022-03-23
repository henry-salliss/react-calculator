import styles from "./CalcButton.module.css";

const CalcButton = (props) => {
  return (
    <button
      className={styles.button}
      onClick={props.onClick}
      value={props.value}
    >
      {props.children}
    </button>
  );
};

export default CalcButton;
