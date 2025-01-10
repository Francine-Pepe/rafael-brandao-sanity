import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import { useEffect, useState } from "react";
import client from "../client";
import PageTitle from "../components/PageTitle";
import { Navigation } from "../data";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function ImageMasonry() {
  const [gallery, setGallery] = useState([]);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(-1);

  const handleClick = (slug) => {
    setOpen(!open && slug);
    setIndex(slug + 1);
  };

  const closeModal = () => {
    setOpen(true);
  };

  useEffect(() => {
    client
      .fetch(
        `*[_type == "imageGallery"] {  slug, image {
            asset -> {_id, url},
            alt
          } }`
      )
      .then((data) => setGallery(data))
      .catch(console.error);
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
              <>
                <div
                  key={index}
                  className="gallery-image"
                  onClick={() => handleClick(item.slug)}
                >
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
                  {open === item.slug && (
                    <Lightbox
                      open={open}
                      close={() => closeModal(false)}
                      slides={[{ src: item.image.asset.url }]}
                    />
                  )}
                </div>
              </>
            ))}
          </Masonry>
        </Box>
      </div>
    </>
  );
}
