import React from "react";

export default ({ active, onClick, children }) => (
  <button className="filter" onClick={onClick} disabled={active}>
    {children}
  </button>
);
