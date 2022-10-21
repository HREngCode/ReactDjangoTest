import React from "react";
// import { useNavigate } from "react-router-dom";

const SearchBar = ({setSearchTerm, searchTerm, fetchVideos}) => {

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
      <button type="submit" onClick={() => {fetchVideos(searchTerm)}}>Search</button>
    </div>

      //<button type="submit" onClick=[() => {fetchVideos()}]>Search</button>
  );
};

export default SearchBar;