import styles from "./Favourite.module.scss";
import { PageTitle } from "../PageTitle/PageTitle";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import { selectFavouriteCard } from "../../redux/cardsRedux";

export const Favourite = () => {
  const favouriteCards = useSelector((state) => selectFavouriteCard(state));

  return (
    <div className={styles.hero}>
      <PageTitle style={styles.title}>Favourite</PageTitle>
      <p className={styles.subtitle}>
        There is a column with your Favourite cards
      </p>
      <article className={styles.column}>
        {favouriteCards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </article>
    </div>
  );
};
