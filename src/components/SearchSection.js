import React from "react";

const SearchSection = () => {
  return (
    <div className="search-section">
      <form action="#" className="search-form">
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
