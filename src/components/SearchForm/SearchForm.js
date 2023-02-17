import TextInput from "../TextInput/TextInput";
import styles from "./SearchForm.module.scss";

const SearchForm = () => {
  return (
    <form className={styles.form}>
      <TextInput placeholder="Search..." />
      <button className={styles.button}>Search</button>
    </form>
  );
};
export default SearchForm;
