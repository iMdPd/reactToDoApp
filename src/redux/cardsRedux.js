import shortid from "shortid";
import { strContains } from "../utils/strContains";

const ADD_CARD = "app/card/ADD_CARD";
const REMOVE_CARD = "app/card/REMOVE_CARD";
const TOGGLE_CARD_FAVOURITE = "app/card/TOGGLE_CARD_FAVOURITE";

/* selectors */
export const selectFilteredCards = ({ cards, searchInput }, columnId) =>
  cards.filter(
    (card) => card.columnId === columnId && strContains(card.title, searchInput)
  );
export const selectFavouriteCard = ({ cards }) =>
  cards.filter(({ isFavourite }) => isFavourite === true);
/* actions */
export const addCard = (payload) => ({ type: ADD_CARD, payload });
export const removeCard = (payload) => ({ type: REMOVE_CARD, payload });
export const toggleCardFavourite = (payload) => ({
  type: TOGGLE_CARD_FAVOURITE,
  payload,
});

export const cardsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_CARD:
      return [...statePart, { ...action.payload, id: shortid() }];

    case REMOVE_CARD:
      return [...statePart.filter((card) => card.id !== action.payload)];

    case TOGGLE_CARD_FAVOURITE:
      return statePart.map((card) =>
        card.id === action.payload
          ? { ...card, isFavourite: !card.isFavourite }
          : card
      );

    default:
      return statePart;
  }
};
