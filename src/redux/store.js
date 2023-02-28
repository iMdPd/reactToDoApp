import { initialState } from "./initialState";
import { createStore } from "redux";

const reducer = (state, action) => {
  if (action.type === "ADD_COLUMN")
    return { ...state, columns: [...state.columns, action.newColumn] };
  return state;
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
