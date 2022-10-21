import React from "react";
import { Link } from "react-router-dom";

const VideoPresenter = (videos, ItemMapper) => {
  //destructure the video
  const { id, snippet} = ItemMapper;
  return (
    <div>
      <p>{id}</p>
      <p>{snippet}</p>
    </div>
  );
};

export default VideoPresenter;
