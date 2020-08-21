export default (state = [{ text: "dasdasd", completed: true }], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "COMPLETE_ALL_TODO":
      return state.map((todo) => ({ ...todo, completed: true }));
    default:
      return state;
  }
};
