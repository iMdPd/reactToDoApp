import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import styles from "./SearchForm.module.scss";

const SearchForm = () => {
  return (
    <form className={styles.form}>
      <TextInput placeholder={"Search..."} />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};
export default SearchForm;
