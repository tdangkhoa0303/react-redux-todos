import * as types from "../../contants/actionTypes";
import { toast } from "react-toastify";

export default (
  state = { isAuth: false, user: null, loading: false },
  action
) => {
  switch (action.type) {
    case types.LOGIN_REQUESTING:
      return { ...state, loading: true };
    case types.LOGIN_SUCCESS:
      toast.success("Login successfully!");
      return {
        ...state,
        isAuth: true,
        loading: false,
        user: action.user,
      };
    case types.LOGIN_FAILED:
      toast.error("Login failed!", action.message);
      return {
        ...state,
        loading: false,
        isAuth: false,
      };
    case types.TOKEN_REFRESH_SUCCESS:
      return {
        ...state,
        user: action.user,
      };
    case types.TOKEN_REFRESH_FAILED:
    case types.LOG_OUT:
      return {
        ...state,
        user: null,
        isAuth: false,
      };

    default:
      return state;
  }
};
