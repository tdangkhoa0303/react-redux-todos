import { connect } from "react-redux";
import { toggleTodo, VisibilityFilters, getTodos } from "../actions";
import TodoList from "../components/TodoList";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((todo) => !todo.completed);
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((todo) => todo.completed);
    default:
      throw new Error("Unknown filter ", filter);
  }
};

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos.data, state.visibilityFilter),
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id, completed) => dispatch(toggleTodo(id, completed)),
  getTodos: () => dispatch(getTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
