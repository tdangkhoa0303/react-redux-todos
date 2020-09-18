// import store from "../redux/store";
// import axios from "axios";

// export default () => {
//   let token = null;
//   const user = store.getState().auth.user;

//   if (user) token = user.token;
//   const api = axios.create({
//     baseURL: process.env.REACT_APP_API_URL,
//     timeout: 3000,
//     headers: {
//       "x-access-token": token,
//     },
//   });

//   const getTodoAPI = () => {
//     return api.get(`/todos`);
//   };

//   const addTodoAPI = ({ text, id, completed }) => {
//     return api.post(`/todos`, { text, id, completed });
//   };

//   const toggleTodoAPI = (id, completed) => {
//     return api.post(`/todos/${id}`, {
//       completed,
//     });
//   };

//   const completeAllTodoAPI = () => {
//     return api.get(`/todos/complete`);
//   };

//   const requestLogin = (email, password) => {
//     return api.post(`/auth/login`, {
//       email,
//       password,
//     });
//   };

//   const requestTokenRefresh = () => {
//     return api.post(`/auth/refreshToken`);
//   };

//   return {
//     getTodoAPI,
//     addTodoAPI,
//     toggleTodoAPI,
//     completeAllTodoAPI,
//     requestLogin,
//     requestTokenRefresh,
//   };
// };
