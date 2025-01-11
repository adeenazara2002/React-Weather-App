import { useState } from "react";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import HourlyWeatherItem from "./components/HourlyWeatherItem";
import SearchSection from "./components/SearchSection";

function App() {
  const [currentWeather, setCurrentWeather] = useState({});
  const getWeatherDetails = async(API_URL) => {
    try{
     const response = await fetch(API_URL);
     const data = await response.json();

     const temperature = Math.floor(data.current.temp_c);
     const description = data.current.condition.text;

     setCurrentWeather({temperature, description});

    }catch(error){
      console.log(error);
      
    }
    

  }
  return (
    <div className="container">
      {/* search Section */}
      <SearchSection getWeatherDetails={getWeatherDetails}/>

      {/* Weather section */}
      <div className="weather-section">
        <CurrentWeather currentWeather={currentWeather}/>

        {/* Hourly weather forecast list */}
        <div className="hourly-forecast">
          <ul className="weather-list">
            <HourlyWeatherItem />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
