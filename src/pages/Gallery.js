import Box from "@mui/material/Box";
import { useEffect, useState, useRef, useCallback, memo, useMemo } from "react";
import client from "../client";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import bgImage from "../assets/_RAF0401.webp";
import GalleryFixedImage from "../components/GalleryFixedImage";

const GalleryImage = memo(({ image, alt, description, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef();

  const optimizedUrl = `${image.asset.url}?w=800&q=85&auto=format&fit=max&sharp=30`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "50px" },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      onClick={onClick}
      style={{
        opacity: isVisible && isLoaded ? 1 : 0,
        transform: isVisible && isLoaded ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.4s ease, transform 0.4s ease",
        cursor: "pointer",
        aspectRatio: "3/4",
        overflow: "hidden",
      }}
    >
      <img
        src={isVisible ? optimizedUrl : ""}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = "scale(1.02)";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "scale(1)";
        }}
      />

      {description && (
        <div className="image-description">
          <h5>{description}</h5>
        </div>
      )}
    </div>
  );
});

GalleryImage.displayName = "GalleryImage";

export default function ImageMasonry() {
  const [gallery, setGallery] = useState([]);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(-1);
  const hasFetchedRef = useRef(false);

  const handleClick = useCallback((itemIndex) => {
    setIndex(itemIndex);
    setOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);
    setIndex(-1);
  }, []);

  useEffect(() => {
    if (hasFetchedRef.current) return;

    hasFetchedRef.current = true;

    const fetchData = async () => {
      try {
        const data = await client.fetch(`
          *[_type == "imageGallery"] {
            images[] {
              asset -> {
                _id,
                url,
                metadata { dimensions }
              },
              alt,
              description
            }
          }[0]
        `);

        setGallery(data?.images || []);
      } catch (error) {
        console.error("Failed to fetch gallery:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    gallery.slice(0, 3).forEach((image) => {
      const imageToPreload = new Image();
      imageToPreload.src = `${image.asset.url}?w=1200&q=100&auto=format`;
    });
  }, [gallery]);

  const lightboxSlides = useMemo(
    () =>
      gallery.map((image) => ({
        src: `${image.asset.url}?w=1920&q=100&auto=format&sharp=30`,
        alt: image.alt,
        description: image.description,
      })),
    [gallery],
  );

  return (
    <>
      <GalleryFixedImage image={bgImage} />

      <section className="gallery-container container">
        <Box
          sx={{
            width: "100%",
            minHeight: "100vh",
            margin: "0 auto",
            padding: "0.5rem",
            position: "relative",
            zIndex: 10,
          }}
        >
          <section className="image-grid-section">
            <div className="image-grid-container container">
              <div
                className="columns"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                  gap: "1rem",
                }}
              >
                {gallery.map((image, imageIndex) => (
                  <GalleryImage
                    key={image.asset._id || imageIndex}
                    image={image}
                    alt={image.alt || "gallery image"}
                    description={image.description}
                    onClick={() => handleClick(imageIndex)}
                  />
                ))}
              </div>
            </div>
          </section>
        </Box>
      </section>

      <Lightbox
        open={open}
        close={closeModal}
        index={index}
        slides={lightboxSlides}
        plugins={[Zoom]}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, .9)" },
        }}
      />
    </>
  );
}
