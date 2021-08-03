import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ShowWeather from './ShowWeather';


const WeatherInfo = ({capital}) => {

    const [currentTemp, setCurrentTemp] = useState([]);
    const params = {
        access_key: "8d17bdc8eff786c0a0ebbb6b14dbdce3",
        query: capital
    }
    console.log(params);

    const hook = () => {
        axios.get('http://api.weatherstack.com/current',{params}).then(response => {
            // const tempObject = {
            //     temperature : response.data.current.temperature,
            //     weatherImage: response.data.current.weather_icons[0],
            //     windspeed: response.data.current.wind_speed,
            //     winddirction: response.data.current.wind_dir
            // }
            // setCurrentTemp(tempObject);
            setCurrentTemp(response.data);
            console.log("response.data.current", response.data.current);
            console.log("response.data.current.observation_time: ", response.data.current.observation_time)
            
            console.log(`Current temperature in ${response.data.location.name} is ${response.data.current.temperature}℃ and ${response.data.current.wind_speed} mph`);
        }).catch(error => {
                console.log(error);
        });
    }
    useEffect(hook, []);

    // return (
    //     <div>
    //         <p><b>temperature</b>: {currentTemp.temperature}℃</p>
    //         <img src={currentTemp.weatherImage} alt="Ho" />
    //         <p><b>wind:</b> {currentTemp.windspeed}mph direction {currentTemp.winddirction}</p>
    //     </div>
    // );
    return <ShowWeather currentTemp={currentTemp} />
    // return null;
}

export default WeatherInfo;
