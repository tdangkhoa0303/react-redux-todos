import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityIFilter";

export default combineReducers({
  todos,
  visibilityFilter,
});
