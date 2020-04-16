import React from "react";
import Country from "./Country";

const filterCountries = (array, query) => {
  return array.filter((el) => {
    return (
      el.props.country.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  });
};

//TODO: add state to control detailBool, and button to switch it
const Countries = ({ countries, filter }) => {
  const filteredList = filterCountries(
    countries.map((country) => (
      <Country key={country.alpha3Code} country={country} />
    )),
    filter
  );

  return (
    <div>
      {filteredList.length > 11
        ? "Too many matches, specify another filter"
        : filteredList.length < 11 && filteredList.length !== 1
        ? filteredList
        : filteredList.length === 1
        ? filteredList
        : "Something went wrong"}
    </div>
  );
};

export default Countries;
