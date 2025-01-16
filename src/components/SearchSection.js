import React from "react";

const SearchSection = ({getWeatherDetails}) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const handleCitysearch = (e) => {
    e.preventDefault();
    const searchInput = e.target.querySelector(".search-input");
    const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchInput.value}&days=2`;
    getWeatherDetails(API_URL);
  };
  return (
    <div className="search-section">
      <form action="#" className="search-form" onSubmit={handleCitysearch}>
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
  );
};

export default SearchSection;
