import React from "react";
import { ToastContainer } from "react-toastify";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import Header from "./containers/Header";
import VisibleTodoList from "./containers/VisibleTodoList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <h1>React - Redux todolist</h1>
      <div id="todos-list">
        <Header />
        <VisibleTodoList />
        <Footer />
        <ToastContainer autoClose={3000} />
      </div>
    </div>
  );
}

export default App;
