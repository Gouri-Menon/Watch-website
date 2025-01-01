import React, { useEffect, useState } from "react";
import axios from "axios";
import VideoCard from "../components/VideoCard";

const HomePage = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/videos").then((res) => {
      setVideos(res.data);
    });
  }, []);

  return (
    <div>
      {videos.map((video) => (
        <VideoCard key={video._id} video={video} />
      ))}
    </div>
  );
};

export default HomePage;
