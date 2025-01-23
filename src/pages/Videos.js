import React, { useEffect, useState } from "react";
import client from "../client";
import VideoTabs from "../components/VideoTabs";
import PageTitle from "../components/PageTitle";
import { Navigation } from "../data";
import YoutubeVideos from "../components/YouTubeComponent";

function Videos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "videos"] {image, description {
              asset -> {_id, url},
              alt
            } }`
      )
      .then((data) => setVideos(data))
      .catch(console.error);
  }, []);
  return (
    <div>
      <PageTitle data={Navigation} />
      <VideoTabs />
    </div>
  );
}

export default Videos;
