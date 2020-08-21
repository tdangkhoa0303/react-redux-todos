import React from "react";
import Todo from "./Todo";

export default ({ todos, toggleTodo }) => (
  <section className="todos">
    {todos.length ? (
      todos.map((todo) => (
        <Todo key={todo.id} onClick={() => toggleTodo(todo.id)} {...todo} />
      ))
    ) : (
      <div className="row">Seem like... You have no todo.</div>
    )}
  </section>
);
