import styles from "./TextInput.module.scss";

const TextInput = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={styles.input}
      placeholder={placeholder}
    />
  );
};

export default TextInput;
