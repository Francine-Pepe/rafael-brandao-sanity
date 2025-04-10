import React from "react";

// Custom component for rendering YouTube videos
const YouTubeComponent = ({ value }) => {
  const { url } = value; // Extract the YouTube URL from the value prop

  // Extract the video ID from the YouTube URL
  const videoId = url.split("v=")[1]?.split("&")[0];
  console.log("YouTube URL from Sanity:", videoId);

  if (!videoId) {
    return <p>Invalid YouTube URL</p>;
  }

  const isValidYoutubeUrl = (url) => {
    try {
      const parsed = new URL(url);
      return (
        parsed.hostname === "www.youtube.com" || parsed.hostname === "youtu.be"
      );
    } catch (e) {
      return false;
    }
  };

  return (
    <div className="youtube-embed">
      {isValidYoutubeUrl ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <p>Invalid YouTube URL</p>
      )}
    </div>
  );
};

export default YouTubeComponent;
