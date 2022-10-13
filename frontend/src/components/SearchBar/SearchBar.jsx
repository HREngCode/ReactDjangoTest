import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value)
    console.log(searchTerm)
    
  }

  return (
    <div>
      <input
      type="search"
      placeholder='"Search Videos'
      onChange={handleChange}  
      value={searchTerm}/>
    </div>

      // <button type="submit" onClick={() => {fetchVideos()}}>Search</button>

  );
};

export default SearchBar;
