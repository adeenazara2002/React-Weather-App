import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="search-section">
        <form action="#" className="searcch-form">
          <span class="material-symbols-rounded">search</span>
          <input
            type="search"
            placeholder="Enter a city name"
            className="search-input"
            required
          ></input>
        </form>
        <button className="location-button">
          <span className="material-symbols-rounded">location_on</span>
        </button>
      </div>

      {/* search section */}
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
          </ul>

          <ul className="weather-list">
            <li className="weather-item">
              <p className="time">00:00</p>
              <img src="icons/clouds.svg" alt="" className="weather-icon"></img>
              <p className="temperature">20°</p>
            </li>
          </ul>

          <ul className="weather-list">
            <li className="weather-item">
              <p className="time">00:00</p>
              <img src="icons/clouds.svg" alt="" className="weather-icon"></img>
              <p className="temperature">20°</p>
            </li>
          </ul>

          <ul className="weather-list">
            <li className="weather-item">
              <p className="time">00:00</p>
              <img src="icons/clouds.svg" alt="" className="weather-icon"></img>
              <p className="temperature">20°</p>
            </li>
          </ul>

          <ul className="weather-list">
            <li className="weather-item">
              <p className="time">00:00</p>
              <img src="icons/clouds.svg" alt="" className="weather-icon"></img>
              <p className="temperature">20°</p>
            </li>
          </ul>

          <ul className="weather-list">
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
