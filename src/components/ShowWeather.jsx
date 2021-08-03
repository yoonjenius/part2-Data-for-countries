import React from "react";

const ShowWeather = ({ currentTemp }) => {
  if (currentTemp.length === 0) {
    console.log("null");
    return null;
  } else {
    console.log("currentTemp", currentTemp);
    return (
      <div>
        <p><b>temperature</b>: {currentTemp.current.temperature}℃</p>
        <img src={currentTemp.current.weather_icons} alt="Ho" />
        <p><b>wind:</b> {currentTemp.current.wind_speed}mph direction {currentTemp.current.wind_dir}</p>
      </div>
    );
  }
};

export default ShowWeather;
