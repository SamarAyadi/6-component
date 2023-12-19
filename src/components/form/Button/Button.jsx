import styles from "./styles.module.css";

const Button = ({ type = "submit", children }) => {
  return (
    <div className={styles.button}>
      <input type={type} value={children} />
    </div>
  );
};

export default Button;
