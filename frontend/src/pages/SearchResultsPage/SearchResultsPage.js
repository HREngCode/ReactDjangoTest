import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const SearchResultsPage = (video) => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        const fetchVideos = async () => {
            try {
              let response = await axios.get(
              "https://jsonplaceholder.typicode.com/albums"
              );
              console.log(response.data)
              setVideos(response.data)
              } catch (error) {
                console.log(error.message);
              }
            }; 
      fetchVideos()
    }, []);

    return ( 
        <div>
            <h1> All Users</h1>
            {videos && videos.map((video) => {
                return (
                <li key={video.id}>
                    <Link to={`/search/${video.id}`}>
                        {video.title}
                        </Link>
                        </li>
                );
            })}
        </div>
     );
}
 
export default SearchResultsPage;