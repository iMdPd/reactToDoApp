import shortid from "shortid";

export const cardsReducer = (statePart = [], action) => {
  switch (action.type) {
    case "ADD_CARD":
      return [...statePart, { ...action.payload, id: shortid() }];

    case "REMOVE_CARD":
      return [...statePart.filter((card) => card.id !== action.payload)];

    case "TOGGLE_CARD_FAVOURITE":
      return statePart.map((card) =>
        card.id === action.payload
          ? { ...card, isFavourite: !card.isFavourite }
          : card
      );

    default:
      return statePart;
  }
};
