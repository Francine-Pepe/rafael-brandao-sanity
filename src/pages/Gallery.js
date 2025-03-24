import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import { useEffect, useState } from "react";
import client from "../client";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import FixedImage from "../components/FixedImage";
import bgImage from "../assets/_RAF0401.webp";
import { useTranslation } from "react-i18next";

export default function ImageMasonry() {
  const [gallery, setGallery] = useState([]);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(-1);
  const { t } = useTranslation();

  const handleClick = (itemIndex) => {
    setOpen(true);
    setIndex(itemIndex);
  };

  const closeModal = () => {
    setOpen(false);
    setIndex(-1);
  };

  useEffect(() => {
    client
      .fetch(
        `*[_type == "imageGallery"] {
          title,
          slug,
          images[] {
            asset -> { _id, url },
            alt,
            description
          }
        }`
      )
      .then((data) => setGallery(data || []))
      .catch(console.error);
  }, []);

  return (
    <>
      <FixedImage image={bgImage} />
      <section className="gallery-header">
        <p>{t("galleryText")}</p>
      </section>

      <section className="gallery-container container">
        <Box
          sx={{
            width: "100%",
            minHeight: 829,
            margin: "0 auto",
            padding: "0.5rem",
          }}
        >
          <Masonry
            spacing={1}
            columns={{ xs: 1, sm: 2, md: 3 }}
            sx={{ margin: "0 auto" }}
          >
            {gallery.map((item, itemIndex) =>
              item.images?.map((image, imageIndex) => (
                <div
                  key={`${itemIndex}-${imageIndex}`}
                  className="gallery-image"
                  onClick={() => handleClick(imageIndex)}
                  style={{ position: "relative" }} // Add relative positioning
                >
                  <img
                    srcSet={`${image.asset.url}?w=1000&auto=format&dpr=2 2x`}
                    src={`${image.asset.url}?w=1000&auto=format`}
                    alt={image.alt}
                    loading="lazy"
                    style={{
                      borderRadius: 4,
                      display: "block",
                      width: "100%",
                      quality: 100,
                    }}
                  />
                  {/* Description on Hover */}
                  <div className="image-description">
                    <h5>{image.description}</h5>
                  </div>
                </div>
              ))
            )}
          </Masonry>
        </Box>
      </section>

      {/* Lightbox for Carousel */}
      {open && (
        <Lightbox
          open={open}
          close={closeModal}
          index={index}
          slides={gallery.flatMap((item) =>
            item.images?.map((image) => ({
              src: image.asset.url,
              alt: image.alt,
              description: image.description,
            }))
          )}
          styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
        />
      )}
    </>
  );
}
