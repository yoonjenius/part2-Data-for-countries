import React from 'react';
import lodash from 'lodash';
import CountryInfo from './CountryInfo';
import UnderCountries from './UnderCountries';

const ShowUserQueries = ({userFindInput, AllArray}) => {
 
  const lowCastUserInput = lodash.lowerCase(userFindInput);
  const filterCountries = AllArray.filter(country => lodash.lowerCase(country.name).includes(lowCastUserInput));
  // console.log("filterCountries", filterCountries);

  if(filterCountries.length === 250 || filterCountries.length === 0){//console.log("250 or 0");
    return filterCountries.fill();
  }else if(filterCountries.length > 10 && filterCountries.length < 250){//console.log("10 < length < 250, 11~249");
    return <p>Too many matches, specify another filter</p>
  }else if(filterCountries.length > 1 && filterCountries.length <=10){//console.log("1 < length <= 10, 2~10");
    return filterCountries.map((country, index) => <UnderCountries key={index} name = {country.name} filterCountry = {filterCountries}/>);
  }else if(filterCountries.length === 1){//console.log("1");
    return <CountryInfo filterCountry = {filterCountries} />
  }else {
    return null;
  }
}
export default ShowUserQueries;