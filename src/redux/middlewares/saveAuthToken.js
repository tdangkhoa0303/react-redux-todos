import * as types from "../../contants/actionTypes";
import { setToken } from "../../helpers/api";
export default (store) => (next) => (action) => {
  if (action.type === types.LOGIN_SUCCESS) setToken(action.user.token);
  return next(action);
};
