import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 3000,
  withCredentials: false,
});

export const getTodoAPI = () => {
  return api.get(`/todos`);
};

export const addTodoAPI = ({ text, id, completed }) => {
  return api.post(`/todos`, { text, id, completed });
};

export const toggleTodoAPI = (id, completed) => {
  return api.post(`/todos/${id}`, {
    completed,
  });
};

export const completeAllTodoAPI = () => {
  return api.get(`/todos/complete`);
};

export const requestLogin = (email, password) => {
  return api.post(`/auth/login`, {
    email,
    password,
  });
};

export const requestTokenRefresh = () => {
  return api.post(`/auth/refreshToken`);
};

export const setToken = (token) => {
  api.defaults.headers.common["x-access-token"] = token;
};
