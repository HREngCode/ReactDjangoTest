//General Imports
import React, { useEffect, useContext } from "react";
import {Link} from 'react-router-dom';

//Context Imports
import { VideoContext } from "../../context/VideoContext";



const HomePage = ({defaultVideo}) => {
  const { defaultVideos } = useContext(VideoContext);
  console.log(defaultVideos);
  return ( 
      <div>
        {defaultVideos && defaultVideos.map((defaultVideo) => (
          <p key={defaultVideo.id.videoId}>
          <li>
          <Link to={`/video/${defaultVideo.id.videoId}`}><img src={defaultVideo.snippet.thumbnails.default.url} alt="transformers video"></img></Link>
          {defaultVideo.snippet.title}
          {defaultVideo.id.videoId}
          </li>
          </p>
        ))}
      </div>
    );
  };
  
  export default HomePage;