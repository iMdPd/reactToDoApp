import { initialState } from "./initialState";
import { createStore, combineReducers } from "redux";
import { columnsReducer } from "./columnsRedux";
import { cardsReducer } from "./cardsRedux";
import { listsReducer } from "./listsRedux";
import { searchInputReducer } from "./searchInputRedux";

export const selectAllColumns = (state) => state.columns;
export const selectColumnsByList = ({ columns }, id) =>
  columns.filter(({ listId }) => listId === id);

export const selectSearchInputValue = (state) => state.searchInput;

export const addColumn = (payload) => ({ type: "ADD_COLUMN", payload });

export const updateColumns = (payload) => ({ type: "UPDATE_COLUMNS", payload });

const subReducers = {
  columns: columnsReducer,
  cards: cardsReducer,
  lists: listsReducer,
  searchInput: searchInputReducer,
};

const reducer = combineReducers(subReducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
