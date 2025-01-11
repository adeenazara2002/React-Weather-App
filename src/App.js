import "./App.css";
import SearchSection from "./components/SearchSection";

function App() {
  return (
    <div className="container">
      {/* search Section */}
      <SearchSection />
      {/* Weather section */}
      <div className="weather-section">
        <div className="current-weather">
          <img src="icons/clouds.svg" alt="" className="weather-icon"></img>
          <h2 className="temperature">
            20<span>°C</span>
          </h2>
          <p className="description">Partly cloudy</p>
        </div>
        {/* Hourly weather forecast list */}
        <div className="hourly-forecast">
          <ul className="weather-list">
            <li className="weather-item">
              <p className="time">00:00</p>
              <img src="icons/clouds.svg" alt="" className="weather-icon"></img>
              <p className="temperature">20°</p>
            </li>

            <li className="weather-item">
              <p className="time">00:00</p>
              <img src="icons/clouds.svg" alt="" className="weather-icon"></img>
              <p className="temperature">20°</p>
            </li>

            <li className="weather-item">
              <p className="time">00:00</p>
              <img src="icons/clouds.svg" alt="" className="weather-icon"></img>
              <p className="temperature">20°</p>
            </li>

            <li className="weather-item">
              <p className="time">00:00</p>
              <img src="icons/clouds.svg" alt="" className="weather-icon"></img>
              <p className="temperature">20°</p>
            </li>

            <li className="weather-item">
              <p className="time">00:00</p>
              <img src="icons/clouds.svg" alt="" className="weather-icon"></img>
              <p className="temperature">20°</p>
            </li>

            <li className="weather-item">
              <p className="time">00:00</p>
              <img src="icons/clouds.svg" alt="" className="weather-icon"></img>
              <p className="temperature">20°</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
