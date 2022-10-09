import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const VideoPage = () => {

    const {albumId} = useParams ()
    const [album, setAlbum] = useState ({})
    console.log(album)

    useEffect (() => {

    const fetchAlbum = async() => {
    try {
        let response = await axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}`);
        setAlbum(response.data)
    } 
    catch (error) {
        console.log(error)
    }
    }
    fetchAlbum()
        
    }, [albumId])
    return ( 
        <div>
            <h1>Album Details {albumId}</h1>
            <h1>
                This is the VideoPage
            </h1>
            <iframe id="ytplayer" type="text/html" width="640" height="360"
  src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
  frameBorder="0"></iframe>
        </div>
     );
}
 
export default VideoPage;