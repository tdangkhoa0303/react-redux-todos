import { green } from "@material-ui/core/colors";
import { CheckCircleOutline, CheckCircle } from "@material-ui/icons";
import styled from "@emotion/styled";
/** @jsx jsx */
import { jsx } from "@emotion/core";

const TodoItem = styled.div`
  cursor: pointer;
  line-height: 1.2em;

  &:not(:nth-child(1)) {
    border: 1px solid #f5f5f5;
    border-width: 1px 0px 0px;
  }
`;

export default ({ onClick, completed, text }) => (
  <TodoItem
    css={completed && { textDecoration: "line-through", opacity: "0.6" }}
    onClick={onClick}
  >
    {completed ? (
      <CheckCircle style={{ color: green[500] }} />
    ) : (
      <CheckCircleOutline />
    )}
    <span>{text}</span>
  </TodoItem>
);
