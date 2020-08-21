let nextTodoId = 0;
export const addTodo = (text) => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  text,
});

export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  id,
});

export const completeAllTodo = () => ({
  type: "COMPLETE_ALL_TODO",
});

export const setVisibleFilter = (filter) => ({
  type: "SET_VISIBILITY_FILTER",
  filter,
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE",
};
