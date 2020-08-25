import axios from "axios";

export const getTodoAPI = () => {
  return axios.get("http://localhost:1402/api/todos");
};

export const addTodoAPI = ({ text, id, completed }) => {
  return axios.post("http://localhost:1402/api/todos", { text, id, completed });
};

export const toggleTodoAPI = (id, completed) => {
  return axios.post(`http://localhost:1402/api/todos/${id}`, {
    completed,
  });
};

export const completeAllTodoAPI = () => {
  return axios.get("http://localhost:1402/api/todos/complete");
};
