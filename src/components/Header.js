import React from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import DoneAllIcon from "@material-ui/icons/DoneAll";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Section, Row } from "./shared";

import { addTodo, completeAllTodo } from "../redux/actions";

export default () => {
  const dispatch = useDispatch();
  let input;

  return (
    <Section
      css={{ borderRadius: "2px 2px 0px 0px", borderWidth: "1px 1px 0px" }}
    >
      <Row>
        <DoneAllIcon
          onClick={() => dispatch(completeAllTodo())}
          style={{ cursor: "pointer" }}
        />
        <form
          css={{ flexGrow: "2" }}
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
      </Row>
    </Section>
  );
};
