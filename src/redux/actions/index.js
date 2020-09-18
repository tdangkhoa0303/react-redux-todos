// import * as todoActions from "./todo.action";
// import * as visibilityFilterAction from "./visibilityFilter.action";

// export default {
//   ...todoActions,
//   ...visibilityFilterAction,
// };

import * as types from "../../contants/actionTypes";

export * from "./auth.action";

export const setVisibleFilter = (filter) => ({
  type: types.SET_VISIBILITY_FILTER,
  filter,
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE",
};

export const addTodo = (newTodo) => ({
  type: types.ADD_TODO,
  newTodo,
});

export const toggleTodo = (id, completed) => ({
  type: types.TOGGLE_TODO,
  id,
  completed,
});

export const completeAllTodo = () => ({
  type: types.COMPLETE_ALL_TODO,
});

export const getTodos = () => ({
  type: types.GET_TODO,
});

export const getTodosSuccess = (data) => ({
  type: types.GET_TODO_SUCCESS,
  data,
});

export const getTodosFailed = (error) => ({
  type: types.GET_TODO_FAILED,
  error,
});

export const logInRequesting = (email, password) => ({
  type: types.LOGIN_REQUESTING,
  email,
  password,
});

export const loginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  user,
});

export const loginFailed = ({ statusCode, message }) => ({
  type: types.LOGIN_FAILED,
  statusCode,
  message,
});

export const logOut = () => ({
  type: types.LOG_OUT,
});

export const tokenRefreshRequesting = (email, password) => ({
  type: types.TOKEN_REFRESH_REQUESTING,
});

export const tokenRefreshSuccess = (user) => ({
  type: types.TOKEN_REFRESH_SUCCESS,
  user,
});

export const tokenRefreshFailed = () => ({
  type: types.TOKEN_REFRESH_FAILED,
});
