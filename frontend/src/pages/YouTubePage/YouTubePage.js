import React from "react";
import { useEffect } from "react";
// import { Link } from "react-router-dom"; 


const YouTubePage = ({searchTerm, fetchVideos}) => {
    // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
    // The "token" value is the JWT token that you will send in the header of any request requiring authentication
    //TODO: Add an AddCars Page to add a car for a logged in user's garage
    

    useEffect(() => {

    }, []);
    return (
      <div className="container">
        <h1>Home Page</h1>
        <button onClick={() => {fetchVideos(searchTerm)}}>Click Me for Search</button>
      </div>
    );
  };
  
  export default YouTubePage;