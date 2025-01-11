import React from "react";

const SearchSection = () => {
    const handleCitysearch = (e) => {
        e.preventDefault();
        const searchInput = e.target.querySelector(".search-input");
        console.log(searchInput.value);
        
    }
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
