import React, { Fragment, useEffect } from "react";

import Header from "../../components/Header";
import TodoList from "../../components/TodoList";
import Footer from "../../components/Footer";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const listStyles = css`
  width: 50vw;
  min-width: 300px;
  position: relative;
  z-index: 2;

  &:after,
  &:before {
    content: "";
    border: 1px solid #e5e5e5;
    border-top: none;
    position: absolute;
    height: 100%;
    z-index: -1;
    border-radius: 2px;
    background-color: #ffffff;
  }

  &:before {
    top: 5px;
    left: 6px;
    right: 6px;
  }

  &:after {
    top: 2px;
    left: 3px;
    right: 3px;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

export default () => {
  return (
    <Fragment>
      <h1>React - Redux todolist</h1>
      <div css={listStyles}>
        <Header />
        <TodoList />
        <Footer />
      </div>
    </Fragment>
  );
};
