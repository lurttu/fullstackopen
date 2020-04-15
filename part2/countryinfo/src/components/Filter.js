import React from "react";

const Filter = ({ filterHandler }) => {
  return (
    <div>
      find countries: <input onChange={filterHandler} />
    </div>
  );
};

export default Filter;
