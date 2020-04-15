import React from "react";
import Country from "./Country";

const filterCountries = (array, query) => {
  return array.filter((el) => {
    return (
      el.props.country.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  });
};

const Countries = ({ countries, filter }) => {
  const filteredList = (detailBool) =>
    filterCountries(
      countries.map((country) => (
        <Country
          key={country.alpha3Code}
          country={country}
          detail={detailBool}
        />
      )),
      filter
    );

  const listTest = filterCountries(
    countries.map((country) => (
      <Country key={country.alpha3Code} country={country} />
    )),
    filter
  );

  return (
    <div>
      {listTest.length > 11
        ? "Too many matches, specify another filter"
        : listTest.length < 11 && listTest.length !== 1
        ? filteredList(false)
        : listTest.length === 1
        ? filteredList(true)
        : "Something went wrong"}
    </div>
  );
};

export default Countries;
