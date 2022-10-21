import React from "react";


const VideoPresenter = (video) => {
  //destructure the video
  const {videos:{index}} = video;
  return (
    <div>
      <p>{index}</p>
    </div>
  );
};

export default VideoPresenter;
