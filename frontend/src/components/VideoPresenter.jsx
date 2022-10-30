import React from "react";

const VideoPresenter = (props) => {
//   // destructure the video

console.log(props)

  return (
      <div>
        {props.title}
        {props.id}
        {props.thumbnail}
      </div>
      
      );
};
export default VideoPresenter;
