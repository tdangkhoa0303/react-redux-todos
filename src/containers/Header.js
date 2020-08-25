import React from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

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
            if (!input || !input.value.trim()) return;
            dispatch(
              addTodo({
                text: input.value.trim(),
                id: uuidv4(),
                completed: false,
              })
            );
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
