import React from "react";
import { PortableText } from "@portabletext/react";
import ReactPlayer from "react-player";
import getYoutubeId from "get-youtube-id";
import YouTube from "react-youtube";

const serializers = {
  types: {
    youtube: ({ node }) => {
      const { url } = node;
      const id = getYoutubeId(url);
      return <YouTube videoId={url} />;
    },
  },
};

export default function YoutubeVideos({ blocks }) {
  return <PortableText value={blocks} types={serializers} />;
}
