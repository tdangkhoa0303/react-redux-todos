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

export const getTodos = (url) => ({
  type: "GET_TODO",
  url,
});

export const getTodosSuccess = (data) => ({
  type: "GET_TODO_SUCCESS",
  data,
});

export const getTodosFailed = (error) => ({
  type: "GET_TODO_FAILED",
  error,
});
