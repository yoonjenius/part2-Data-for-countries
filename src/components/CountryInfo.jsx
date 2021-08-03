import React from 'react';
import WeatherInfo from './WeatherInfo';

const CountryInfo = ({filterCountry}) => {

    return (
        filterCountry.map((country, index) => (
          <div key={index}>
            <h3>{country.name}</h3>
            <p>Capital {country.capital}</p>
            <p>Population {country.population}</p>
            <h4>Languages</h4> <ul>{country.languages.map((item, i) => <li key={i}>{item.name}</li>)}</ul>
            <p><img src={country.flag} alt="Nichts" width="140" height="100"></img></p>
            <h3>Weather in {country.capital}</h3>
            <WeatherInfo capital = {country.capital} />
          </div>
      ))
    );
}

export default CountryInfo;