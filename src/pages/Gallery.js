import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import { useEffect, useState } from "react";
import client from "../client";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import FixedImage from "../components/FixedImage";
import bgImage from "../assets/_RAF0401.webp";

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
        `*[_type == "imageGallery" ] {  slug, alt, image {
            asset -> {_id, url},
            alt
          } }`
      )
      .then((data) => setGallery(data))
      .catch(console.error);
  }, []);

  console.log(gallery);
  return (
    <>
      <FixedImage image={bgImage} />
      <section className="gallery-header">
        <p>Galeria de recordações e trajetória de uma vida musical</p>
      </section>

      <section className="gallery-container container">
        <Box
          sx={{
            width: "100%",
            minHeight: 829,
            margin: "0 auto",
            padding: " 0.5rem",
            /* "@media(max-width: 1200px)": {
              width: "90vw",
              padding: "8rem 0",
              margin: "0 auto"
            }, */
          }}
        >
          <Masonry
            spacing={1}
            columns={{ xs: 1, sm: 2, md: 3 }}
            sx={{ margin: "0 auto" }}
          >
            {gallery.map((item, index) => (
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
                    styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}

                  />
                )}
              </div>
            ))}
          </Masonry>
        </Box>
      </section>
    </>
  );
}
