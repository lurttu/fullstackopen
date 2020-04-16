import React, { useState } from "react";
import axios from "axios";

const Country = ({ country }) => {
  const [detail, setDetail] = useState(false);
  const [weather, setWeather] = useState({});

  const handleInfoClick = () => {
    if (!detail) {
      setDetail(!detail);
      axios
        .get(
          `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${country.capital}`
        )
        .then((response) => {
          setWeather(response.data.current);
        });
    }
    if (detail) setDetail(!detail);
  };

  return (
    <div>
      {detail ? (
        <>
          <h1>
            {country.name}
            <button onClick={handleInfoClick}>info</button>
          </h1>
          <p>capital {country.capital}</p>
          <p>population {country.population}</p>
          <h2>languages</h2>
          <ul>
            {country.languages.map((language) => (
              <li key={language.name}>{language.name}</li>
            ))}
          </ul>
          <img
            src={country.flag}
            alt={`flag of ${country.name}`}
            width={"10%"}
            height={"10%"}
          />
          <h2>Weather in {country.capital}</h2>
          <p>
            <b>temperature:</b>
            {weather.temperature} Celsius
          </p>
          <img src={weather.weather_icons} alt={"weather icon"} />
          <p>
            <b>wind:</b>
            {weather.wind_speed} mph direction {weather.wind_dir}
          </p>
        </>
      ) : (
        <p>
          {country.name}
          <button onClick={handleInfoClick}>info</button>
        </p>
      )}
    </div>
  );
};

export default Country;
