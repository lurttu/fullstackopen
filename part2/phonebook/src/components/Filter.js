import React from "react";

const Filter = ({ filterHandler }) => {
  return (
    <div>
      filter shown with: <input id="filter" onChange={filterHandler} />
    </div>
  );
};

export default Filter;
