import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  //For data storing need useState() --> it returns an array
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  //for data loading useEffect
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  //handle visited country
  const handleVisitedCountry = (country) => {
    console.log("addddddd this to your visited country");
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  //handle visited flags
  const handleVisitedFlags = (flag) => {
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  };

  return (
    <div>
      <h3>Countries: {countries.length}</h3>
     {/* visited countries */}
      <div>
        <h5>Visited Countries: {visitedCountries.length}</h5>
        <ul>
          {visitedCountries.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>

      {/* visited flags */}
      <div className="flagg-container">
        {
          visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
        }
      </div>

      {/* remove item from an array in a state
      // use filter to select all the element except the one you want to remove*/}

      {/* display couuntries */}
      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={countries.cca3}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags = {handleVisitedFlags}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
