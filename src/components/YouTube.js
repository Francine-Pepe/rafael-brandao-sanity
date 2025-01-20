import React from "react";
import getYoutubeId from "get-youtube-id";

const YouTube = ({ value }) => {
  const id = getYoutubeId(value.url);
  const url = `https://www.youtube.com/embed/${id}`;
  if (!id) {
    return <div>Missing Youtube URL</div>;
  }

  return (
    <div>
      <iframe
        title='"Youtube Preview'
        width="560"
        height="315"
        src={url}
      />
    </div>
  );
};

export default YouTube;