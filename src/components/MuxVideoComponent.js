import MuxPlayer from "@mux/mux-player-react";
import { client } from "path-to-client-file";
import { useState } from "react";
import { PortableText } from "@portabletext/react";


const MuxVideoComponent = ({ value }) => {
  const [blog, setBlog] = useState(null);
  const fetchBlog = async () => {
    const query = `*[_type == 'youtubeVideos' && slug.current == $slug][0] { title,  body[]{ ..., _type == 'mux.video' => { "playbackId": asset->playbackId } },  }`;
    const data = await client.fetch(query);
    setBlog(data);
  };
  if (!value.playbackId) {
    return <p>No video available</p>;
  }

  return (
    <MuxPlayer
      autoPlay
      loop
      muted
      playbackId={value.playbackId}
      metadata={{ video_title: value.title || "Video" }}
      controls
      style={{ width: "100%", height: "auto" }}
    />
  );
};

const myPortableTextComponents = {
  types: {
    "mux.video": MuxVideoComponent,
  },
};

<PortableText value={blog.body} components={myPortableTextComponents} />;
