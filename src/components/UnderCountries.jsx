import React, { useState } from 'react';
import CountryInfo from './CountryInfo';

const UnderCountries = ({name, filterCountry}) => {
    const [resultToggle, setResultToggle] = useState([]);

    const toggleOneCountry = (countryName) => {
        const returnCountry = filterCountry.filter(country => country.name.includes(countryName));
        // console.log("returnCountry", returnCountry);
        setResultToggle(returnCountry);
    }

    return <div><p key={name}>{name} <button onClick={()=>toggleOneCountry(name)}>show</button></p>
    <CountryInfo filterCountry = {resultToggle} />
    </div>
}

export default UnderCountries;