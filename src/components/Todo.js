import React from "react";
import classNames from "classnames";
import { green } from "@material-ui/core/colors";
import { CheckCircleOutline, CheckCircle } from "@material-ui/icons";

export default ({ onClick, completed, text }) => (
  <div
    className={classNames("todo", "row", { completed: completed })}
    onClick={onClick}
  >
    {completed ? (
      <CheckCircle style={{ color: green[500] }} />
    ) : (
      <CheckCircleOutline />
    )}
    <span>{text}</span>
  </div>
);
