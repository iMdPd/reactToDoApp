import styles from "./CardForm.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "./../Button/Button";
import { TextInput } from "./../TextInput/TextInput";
import { addCard } from "../../redux/cardsRedux";

const CardForm = ({ columnId }) => {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCard({ columnId, title }));
    setTitle("");
  };

  return (
    <form className={styles.cardForm} onSubmit={handleSubmit}>
      <TextInput
        className={styles.input}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button>+</Button>
    </form>
  );
};

export default CardForm;
