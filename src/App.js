import React from "react";
import "./App.css";

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
      </div>
    </div>
  );
}

export default App;
