import React from "react";
import { Link } from "react-router-dom";

const VideoPresenter = (props) => {
  //destructure the video

  return (
    <div>
      <ul><Link to="./video">{props.title}</Link></ul>
      <ul>{props.default}</ul>
    </div>
  );
};
export default VideoPresenter;
