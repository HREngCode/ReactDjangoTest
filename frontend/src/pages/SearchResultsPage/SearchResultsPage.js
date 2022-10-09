import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const SearchResultsPage = (video) => {
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
              let response = await axios.get(
              "https://jsonplaceholder.typicode.com/albums"
              );
              console.log(response.data)
              setAlbums(response.data)
              } catch (error) {
                console.log(error.message);
              }
            }; 
      fetchAlbums()
    }, []);

    return ( 
        <div>
            <h1> All Users</h1>
            {albums && albums.map((album) => {
                return (
                <li key={album.id}>
                    <Link to={`/search/${album.id}`}>
                        {album.title}
                        </Link>
                        </li>
                );
            })}
        </div>
     );
}
 
export default SearchResultsPage;