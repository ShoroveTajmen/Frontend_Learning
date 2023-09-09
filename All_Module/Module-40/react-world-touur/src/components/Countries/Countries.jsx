import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
      //For data storing need useState() --> it returns an array
  const [countries, setCountries] = useState([]);

  //for data loading useEffect
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))

  }, [])



    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            {
                countries.map(country => <Country key={countries.cca3} country={country}></Country>)
            }
        </div>
    );
};

export default Countries;