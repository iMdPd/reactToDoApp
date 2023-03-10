import { initialState } from "./initialState";
import { createStore } from "redux";
import shortid from "shortid";
import { strContains } from "../utils/strContains";

export const selectFilteredCards = ({ cards, searchInput }, columnId) =>
  cards.filter(
    (card) => card.columnId === columnId && strContains(card.title, searchInput)
  );
export const selectAllColumns = (state) => state.columns;
export const selectListById = ({ lists }, listId) =>
  lists.find((list) => list.id === listId);
export const selectColumnsByList = ({ columns }, id) =>
  columns.filter(({ listId }) => listId === id);
export const selectAllLists = (state) => state.lists;
export const selectSearchInputValue = (state) => state.searchInput;
export const selectFavouriteCard = ({ cards }) =>
  cards.filter(({ isFavourite }) => isFavourite === true);

export const addColumn = (payload) => ({ type: "ADD_COLUMN", payload });
export const addCard = (payload) => ({ type: "ADD_CARD", payload });
export const addList = (payload) => ({ type: "ADD_LIST", payload });
export const updateColumns = (payload) => ({ type: "UPDATE_COLUMNS", payload });
export const toggleCardFavourite = (payload) => ({
  type: "TOGGLE_CARD_FAVOURITE",
  payload,
});

const columnsReducer = (statePart = [], action) => {
  switch (action.type) {
    case "ADD_COLUMN":
      return [...statePart, { ...action.payload, id: shortid() }];

    default:
      return statePart;
  }
};

const cardsReducer = (statePart = [], action) => {
  switch (action.type) {
    case "ADD_CARD":
      return [...statePart, { ...action.payload, id: shortid() }];

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

const listsReducer = (statePart = [], action) => {
  switch (action.type) {
    case "ADD_LIST":
      return [...statePart, { ...action.payload, id: shortid() }];

    default:
      return statePart;
  }
};

const searchInputReducer = (statePart = "", action) => {
  switch (action.type) {
    case "UPDATE_COLUMNS":
      return action.payload.title.toLowerCase();

    default:
      return statePart;
  }
};

const reducer = (state, action) => {
  const newState = {
    columns: columnsReducer(state.columns, action),
    cards: cardsReducer(state.cards, action),
    lists: listsReducer(state.lists, action),
    searchInput: searchInputReducer(state.searchInput, action),
  };

  return newState;
};

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_COLUMN":
//       return {
//         ...state,
//         columns: [...state.columns, { ...action.payload, id: shortid() }],
//       };

//     case "ADD_CARD":
//       return {
//         ...state,
//         cards: [...state.cards, { ...action.payload, id: shortid() }],
//       };

//     case "ADD_LIST":
//       return {
//         ...state,
//         lists: [...state.lists, { ...action.payload, id: shortid() }],
//       };

//     case "UPDATE_COLUMNS":
//       return { ...state, searchInput: action.payload.title.toLowerCase() };

//     case "TOGGLE_CARD_FAVOURITE":
//       return {
//         ...state,
//         cards: state.cards.map((card) =>
//           card.id === action.payload
//             ? { ...card, isFavourite: !card.isFavourite }
//             : card
//         ),
//       };

//     default:
//       return state;
//   }
// };

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
