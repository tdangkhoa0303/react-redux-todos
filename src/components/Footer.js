import React from "react";
import { VisibilityFilters } from "../actions";
import FilterLink from "../containers/FilterLink";

export default () => (
  <section className="footer">
    <div className="row">
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
        Completed
      </FilterLink>
    </div>
  </section>
);
