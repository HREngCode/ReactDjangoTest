import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const VideoPage = () => {

    const {videoId} = useParams ()
    const [video, setVideo] = useState ({})
    console.log(video)

    useEffect (() => {

    }, [videoId])
    return ( 
        <div>
            <h1>Video Details {videoId}</h1>
            <h1>
                This is the VideoPage
            </h1>
            <iframe title="Single Video Player" id="ytplayer" type="text/html" width="640" height="360"
  src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
  frameBorder="0"></iframe>
        </div>
     );
}
 
export default VideoPage;