import React, { useState, useEffect } from "react";
import "./App.css";
import Filter from "./components/Filter";
import axios from "axios";
import Countries from "./components/Countries";

function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  });

  const updateFilter = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <Filter filterHandler={updateFilter} />
      <Countries countries={countries} filter={filter} />
    </div>
  );
}

export default App;
