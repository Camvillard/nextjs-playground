import { combineReducers } from "redux";
import likesReducer from "./like.reducer";

const rootReducer = combineReducers({
  likes: likesReducer,
});

export default rootReducer;
