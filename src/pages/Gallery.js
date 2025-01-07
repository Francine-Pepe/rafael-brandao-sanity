import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import { useEffect, useState } from "react";
import client from "../client";
import PageTitle from "../components/PageTitle";
import { Navigation } from "../data";

export default function ImageMasonry() {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "gallery"] {image {
            asset -> {_id, url},
            alt
          } }`
      )
      .then((data) => setGallery(data))
      .catch(console.log);
  }, []);
  return (
    <div className="gallery-container container">
      <PageTitle data={Navigation} />
      <Box
        sx={{
          width: "90vw",
          minHeight: 829,
          margin: "0 auto",
          padding: "10rem 0",
        }}
      >
        <Masonry columns={3} spacing={1}>
          {gallery.map((item, index) => (
            <div key={index}>
              <img
                srcSet={`${item.image.asset.url}?w=1000&auto=format&dpr=2 2x`}
                src={`${item.image.asset.url}?w=1000&auto=format`}
                alt={item.alt}
                loading="lazy"
                style={{
                  borderRadius: 4,
                  display: "block",
                  width: "100%",
                  quality: 100,
                }}
              />
            </div>
          ))}
        </Masonry>
      </Box>
    </div>
  );
}
