import React from "react";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom"; 
import axios from "axios";
import { KEY } from "../../localKey";
import SearchResultsPage from "../SearchResultsPage/SearchResultsPage";


const YouTubePage = ({searchTerm}) => {
    // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
    // The "token" value is the JWT token that you will send in the header of any request requiring authentication
    //TODO: Add an AddCars Page to add a car for a logged in user's garage
    
  

    const fetchVideos = async (searchTerm) => {
      try {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${KEY}&part=snippet&type=video&maxResults=5`);
        console.log(response.data)  
        setVideos(response.data.items);
      } catch (error) {
        console.log(error.response.data)
      }
    };

    const [videos, setVideos] = useState(null);

    useEffect(() => {

    }, []);
    return (
      <div className="container">
        <h1>Home Page</h1>
        <button onClick={() => {fetchVideos(searchTerm)}}>Click Me for Search</button>
        {/* <SearchResultsPage videos={videos}/> */}
      </div>
    );
  };
  
  export default YouTubePage;