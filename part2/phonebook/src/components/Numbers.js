import React from "react";
import Person from "./Person";

const filterNumbers = (array, query) => {
  return array.filter((el) => {
    return el.props.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });
};

const Numbers = ({ persons, filter }) => {
  return (
    <div>
      <h2>Numbers</h2>
      {filterNumbers(
        persons.map((person) => (
          <Person key={person.name} name={person.name} number={person.number} />
        )),
        filter
      )}
    </div>
  );
};

export default Numbers;
