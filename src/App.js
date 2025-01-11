import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import HourlyWeatherItem from "./components/HourlyWeatherItem";
import SearchSection from "./components/SearchSection";

function App() {
  return (
    <div className="container">
      {/* search Section */}
      <SearchSection />

      {/* Weather section */}
      <div className="weather-section">
        <CurrentWeather />

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
