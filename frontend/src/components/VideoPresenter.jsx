import React, { useContext } from "react";
import { VideoContext } from "../context/VideoContext";

const VideoPresenter = ({video}) => {
//   // destructure the video
 const { vidId, setVidId } = useContext(VideoContext);

  return (
      <div>
        {console.log(video)}
        {video.snippet.title}
        {video.id.videoId}
        <img src={video.snippet.thumbnails.default.url} alt="dog video"></img>
      </div>
      
      );
};
export default VideoPresenter;
