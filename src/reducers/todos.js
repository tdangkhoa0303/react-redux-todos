import * as types from "../actions/actionTypes";

export default (state = { isLoading: false, data: [] }, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        ...state,
        data: [...state.data, action.newTodo],
      };
    case types.TOGGLE_TODO:
      return {
        ...state,
        data: state.data.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case types.COMPLETE_ALL_TODO:
      return {
        ...state,
        data: state.data.map((todo) => ({ ...todo, completed: true })),
      };
    case types.GET_TODO:
      return {
        ...state,
        loading: true,
      };
    case types.GET_TODO_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case types.GET_TODO_FAILED:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};
