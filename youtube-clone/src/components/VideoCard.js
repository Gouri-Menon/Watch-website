import React from "react";

const VideoCard = ({ video }) => {
  return (
    <div>
      <h2>{video.title}</h2>
      <video src={video.url} controls width="300"></video>
    </div>
  );
};

export default VideoCard;
