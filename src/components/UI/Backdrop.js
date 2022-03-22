import styles from "./Backdrop.module.css";

const Backdrop = (props) => {
  return <div className={styles.background}>{props.children}</div>;
};

export default Backdrop;
