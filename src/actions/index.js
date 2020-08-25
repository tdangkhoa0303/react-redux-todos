// import * as todoActions from "./todo.action";
// import * as visibilityFilterAction from "./visibilityFilter.action";

// export default {
//   ...todoActions,
//   ...visibilityFilterAction,
// };

import * as types from "./actionTypes";

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
