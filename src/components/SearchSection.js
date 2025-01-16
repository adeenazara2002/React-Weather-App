import React from "react";

const SearchSection = ({getWeatherDetails,searchInputRef}) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const handleCitysearch = (e) => {
    e.preventDefault();
    const searchInput = e.target.querySelector(".search-input");
    const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchInput.value}&days=2`;
    getWeatherDetails(API_URL);
  };

  const handleLocationSearch = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${longitude},${latitude}&days=2`;
        getWeatherDetails(API_URL);
        window.innerWidth >= 768 && searchInputRef.current.focus();
      },
        // console.log(position);
      () => {
        
        alert("Location access denied. Please enable permissions to use this feature")
      }
    )
  }
  return (
    <div className="search-section">
      <form action="#" className="search-form" onSubmit={handleCitysearch}>
        <span class="material-symbols-rounded">search</span>
        <input
          type="search"
          placeholder="Enter a city name" ref={searchInputRef}
          className="search-input"
          required
        ></input>
      </form>
      <button className="location-button" onClick={handleLocationSearch}>
        <span className="material-symbols-rounded">location_on</span>
      </button>
    </div>
  );
};

export default SearchSection;
