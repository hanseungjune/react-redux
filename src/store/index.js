import { combineReducers, createStore } from "redux";
import { counterReducer } from "./counter";

// root Reducer
const rootReducer = combineReducers({
  counterReducer,
});

// store
export const store = createStore(rootReducer);
