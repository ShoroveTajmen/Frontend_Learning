import { useState } from 'react';
import './country.css';
const Country = ({country, handleVisitedCountry, handleVisitedFlags }) => {
    const {name, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }
    console.log(handleVisitedCountry);

    return (
        <div className= {`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{color: visited ? 'purple' : 'black'}}>Name: {name?.common} </h3>
            <img className='img' src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
            <br />
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I have visited' : 'I want visit'}
        </div>
    );
};

export default Country;