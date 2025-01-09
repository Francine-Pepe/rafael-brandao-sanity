import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import { useEffect, useState } from "react";
import client from "../client";
import PageTitle from "../components/PageTitle";
import { Navigation } from "../data";
import { Button } from "../../rafael-brandao/node_modules/sanity-plugin-media/node_modules/@sanity/ui/dist/index.esm";

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
    <>
      <PageTitle data={Navigation} />

      <div className="gallery-container container">
        <Box
          sx={{
            width: "90vw",
            minHeight: 829,
            margin: "0 auto",
            /* "@media(max-width: 1200px)": {
              width: "90vw",
              padding: "8rem 0",
              margin: "0 auto"
            }, */
          }}
        >
          <Masonry spacing={1} columns={{ xs: 1, sm: 2, md: 3 }}>
            {gallery.map((item, index) => (
              <div key={index} className="gallery-image">
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
    </>
  );
}
