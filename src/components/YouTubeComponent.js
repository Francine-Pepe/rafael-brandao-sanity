import React from "react";

// Custom component for rendering YouTube videos
const YouTubeComponent = ({ value }) => {
  const { url } = value; // Extract the YouTube URL from the value prop

  // Extract the video ID from the YouTube URL
  const videoId = url.split("v=")[1]?.split("&")[0];

  if (!videoId) {
    return <p>Invalid YouTube URL</p>;
  }

  return (
    <div className="youtube-embed">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default YouTubeComponent;
