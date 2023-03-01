import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import styles from "./SearchForm.module.scss";

const SearchForm = () => {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault(e);
    dispatch({ type: "UPDATE_COLUMNS", payload: { title } });
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder={"Search..."}
      />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};
export default SearchForm;
