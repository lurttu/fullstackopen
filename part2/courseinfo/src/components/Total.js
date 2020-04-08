import React from "react";

const Total = ({ parts }) => {
  let initialValue = 0;
  let total = parts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises,
    initialValue
  );
  return (
    <p>
      <b>Number of exercises {total}</b>
    </p>
  );
};

export default Total;
