import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const VideoPage = () => {

    const {videoId} = useParams ()
    const [video, setVideo] = useState ({})
    console.log(video)

    useEffect (() => {

    const fetchVideo = async() => {
    try {
        let response = await axios.get(`https://jsonplaceholder.typicode.com/albums/${videoId}`);
        setVideo(response.data)
    } 
    catch (error) {
        console.log(error)
    }
    }
    fetchVideo()
        
    }, [videoId])
    return ( 
        <div>
            <h1>Video Details {videoId}</h1>
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