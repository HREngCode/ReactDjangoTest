import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const nav = useNavigate()
  function searchVideos(event) {
    event.preventDefault();
    nav("/search");
  }
  return (
    <form onSubmit={searchVideos}>
      <input
        placeholder='"Search Videos'
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
