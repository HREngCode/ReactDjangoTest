import React from "react";

const VideoPresenter = ({ video }) => {
  //destructure the video
  const { id, snippet } = video;
  return (
    <div>
      <p>{id}</p>
      <p>{snippet}</p>
    </div>
  );
};

export default VideoPresenter;
