import React from "react";
import { connect } from "react-redux";
import { addTodo, completeAllTodo } from "../actions";
import DoneAllIcon from "@material-ui/icons/DoneAll";

const Header = ({ dispatch }) => {
  let input;

  return (
    <section className="header">
      <div className="row">
        <DoneAllIcon
          onClick={() => dispatch(completeAllTodo())}
          style={{ cursor: "pointer" }}
        />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(input);
            if (!input || !input.value.trim()) return;
            dispatch(addTodo(input.value.trim()));
            input.value = "";
          }}
        >
          <input
            type="text"
            ref={(node) => (input = node)}
            placeholder="Enter new todo..."
          />
        </form>
      </div>
    </section>
  );
};

export default connect()(Header);
