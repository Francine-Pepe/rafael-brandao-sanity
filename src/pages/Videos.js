import React, { useEffect, useState } from "react";
import client from "../client";

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
      {videos.map((item, index) => {
        return (
          <div key={index} className="gallery-image">
            <img
              src={item.image.asset.url}
              alt={item.alt}
              loading="lazy"
              style={{
                borderRadius: 4,
                display: "block",
                width: "100%",
                height: "100%",
              }}
            />
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Videos;
