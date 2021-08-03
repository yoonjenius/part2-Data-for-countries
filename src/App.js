import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ShowUserQueries from './components/ShowUserQueries';

const App = () => {
  const [findInput, setFindInput] = useState('ko');
  const [countriesArray, setCountriesArray] = useState([]);
  
  // useEffect(()=> {
  //   axios.get('http://localhost:3001/countries').then(response => {
  //     setCountriesArray(response.data);
  //     console.log("countriesArray", countriesArray);
  //   });
  // }, []);
  const hook = () => {
    axios.get('http://localhost:3001/countries').then(response=>{
      setCountriesArray(response.data);
      // console.log("countriesArray", countriesArray);
    }).catch(error => {
      console.log(error);
    })
  }
  useEffect(hook, []);

  const handleInput = (event) => {
    const inputCountry = event.target.value;
    setFindInput(inputCountry);
  }
  
  console.log("App");
  console.log("countriesArray", countriesArray);

  return (
    <div>
      <p>find countires <input onChange={handleInput} value={findInput}/></p>
      <ShowUserQueries userFindInput = {findInput} AllArray={countriesArray} />
    </div>
  );
}

export default App;
