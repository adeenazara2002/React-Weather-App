import React from "react";

const CurrentWeather = ({currentWeather}) => {
  return (
    <div div className="current-weather">
      <img src={`icons/${currentWeather.weatherIcon}.svg`} alt="" className="weather-icon"></img>
      <h2 className="temperature">
        {currentWeather.temperature}<span>°C</span>
      </h2>
      <p className="description">{currentWeather.description}</p>
    </div>
  );
};

export default CurrentWeather;
