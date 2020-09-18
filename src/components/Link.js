import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setVisibleFilter } from "../redux/actions";
import styled from "@emotion/styled";

export default ({ filter, children }) => {
  const active = useSelector((state) => state.visibilityFilter === filter);
  const dispatch = useDispatch();

  const Filter = styled.button`
    &:disabled {
      border-color: #0197f6;
      background-color: #0197f6;
      color: #ffffff;
    }
  `;

  return (
    <Filter
      className="filter"
      onClick={() => dispatch(setVisibleFilter(filter))}
      disabled={active}
    >
      {children}
    </Filter>
  );
};
