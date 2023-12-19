import styles from "./styles.module.css"

const Input = ({ type, name, value, onChange }) => {
  return (
    <div className={styles.input}>
      <label htmlFor={name}> {name.toUpperCase()} </label>
      <input type={type} name={name} value={value} onChange={onChange} />
    </div>
  );
};

export default Input;
