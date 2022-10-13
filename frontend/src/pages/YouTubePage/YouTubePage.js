import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
// import { Link } from "react-router-dom";
import axios from "axios";
import { KEY } from "../../localKey";
import SearchResultsPage from "../SearchResultsPage/SearchResultsPage";


const YouTubePage = () => {
    // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
    // The "token" value is the JWT token that you will send in the header of any request requiring authentication
    //TODO: Add an AddCars Page to add a car for a logged in user's garage
    const [user, token] = useAuth();
    // const [users, setUsers] = useState([]);
    const [videos, setVideos] = useState(null);
    const fetchVideos = async () => {
      try {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=duckhunting&key=${KEY}&part=snippet&type=video&maxResults=5`);
        console.log(response.data)
        setVideos(response.data.items);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    
    useEffect(() => {

    }, [token]);
    return (
      <div className="container">
        <h1>Home Page</h1>
        <button onClick={() => {fetchVideos()}}>Click Me for Search</button>
        {/* {videos && videos.map((singleVideo) => (
          <div>{singleVideo.snippet.title}</div> */}
          <SearchResultsPage videos={videos}/>
          {/* ))} */}
      </div>
    );
  };
  
  export default YouTubePage;