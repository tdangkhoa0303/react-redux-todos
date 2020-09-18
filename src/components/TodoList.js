import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, VisibilityFilters, getTodos } from "../redux/actions";
import { Section, Row } from "./shared";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import Todo from "./Todo";

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const getVisibleTodos = (todos, filter) => {
    switch (filter) {
      case VisibilityFilters.SHOW_ALL:
        return todos;
      case VisibilityFilters.SHOW_ACTIVE:
        return todos.filter((todo) => !todo.completed);
      case VisibilityFilters.SHOW_COMPLETED:
        return todos.filter((todo) => todo.completed);
      default:
        throw new Error("Unknown filter", filter);
    }
  };

  const todos = useSelector((state) =>
    getVisibleTodos(state.todos.data, state.visibilityFilter)
  );

  return (
    <Section css={{ minHeight: "3em", height: "fit-content" }}>
      {todos.length ? (
        todos.map((todo) => (
          <Todo
            key={todo.id}
            onClick={() => dispatch(toggleTodo(todo.id, !todo.completed))}
            {...todo}
          />
        ))
      ) : (
        <Row>Seem like... You have no todo.</Row>
      )}
    </Section>
  );
};
