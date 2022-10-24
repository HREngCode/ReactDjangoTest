import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {props} from "../../components/VideoPresenter"


const VideoPage = (props) => {
    const tool = props.id
    const {videoId} = props.id

    console.log(videoId)

    useEffect (() => {

    }, [videoId])
    return ( 
        <div>
            <h1>Video Details {videoId}</h1>
            <h1>
                This is the VideoPage
            </h1>
            <iframe title="Single Video Player" id="ytplayer" type="text/html" width="640" height="360"
  src="https://www.youtube.com/embed/PeSBi6Uda5U?autoplay=1&origin=http://example.com"
  frameBorder="0"></iframe>
        </div>
     );
}
 
export default VideoPage;

// `https://youtube.com/embed/${videoId}?autoplay=0'