// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

const SearchBar = ({setSearchTerm, searchTerm}) => {

  const handleChage = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value)
    console.log(searchTerm)
  }
  return (
    <div>
      <input
        type="text"  
        placeholder='"Search Videos'
        onChange={handleChage}
        value={searchTerm}/>
      <button type="submit">Search</button>
    </div>

      //<button type="submit" onClick=[() => {fetchVideos()}]>Search</button>
  );
};

export default SearchBar;