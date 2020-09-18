import { combineReducers } from "redux";
import todos from "./todo.reducer";
import visibilityFilter from "./visibilityFilter.reducer";
import auth from "./auth.reducer";

export default combineReducers({
  todos,
  visibilityFilter,
  auth,
});
