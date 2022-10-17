// import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({setSearchTerm, searchTerm}) => {

  let navigate = useNavigate();

  const navigateSearchResults = () => {
    navigate('/search')
  }

  const handleChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value)
    console.log(searchTerm)
  }
  return (
    <div>
      <input
        type="text"  
        placeholder='"Search Videos'
        onChange={handleChange}
        value={searchTerm}/>
      <button type="submit" onClick={navigateSearchResults} >Search</button>
    </div>

      //<button type="submit" onClick=[() => {fetchVideos()}]>Search</button>
  );
};

export default SearchBar;