import React from "react";
import { VisibilityFilters } from "../redux/actions";
import Link from "./Link";
import { Section, Row } from "./shared";
/** @jsx jsx */
import { jsx } from "@emotion/core";

export default () => (
  <Section
    css={{ borderRadius: "0px 0px 2px 2px", borderWidth: "0px 1px 1px" }}
  >
    <Row css={{ justifyContent: "center" }}>
      <Link filter={VisibilityFilters.SHOW_ALL}>All</Link>
      <Link filter={VisibilityFilters.SHOW_ACTIVE}>Active</Link>
      <Link filter={VisibilityFilters.SHOW_COMPLETED}>Completed</Link>
    </Row>
  </Section>
);
