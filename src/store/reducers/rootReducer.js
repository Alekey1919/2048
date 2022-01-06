import { combineReducers } from "redux";
import boardReducer from "./boardReducer";
import scoreReducer from "./scoreReducer";

const rootReducer = combineReducers({
  board: boardReducer,
  score: scoreReducer,
});

export default rootReducer;
