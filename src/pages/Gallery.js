import Box from "@mui/material/Box";
import { useEffect, useState, useRef } from "react";
import client from "../client";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import bgImage from "../assets/_RAF0401.webp";
import GalleryFixedImage from "../components/GalleryFixedImage";

export default function ImageMasonry() {
  const [gallery, setGallery] = useState([]);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(-1);
  const [animationDuration, setAnimationDuration] = useState(500);
  const [maxZoomPixelRatio, setMaxZoomPixelRatio] = useState(1);
  const [zoomInMultiplier, setZoomInMultiplier] = useState(2);
  const [doubleTapDelay, setDoubleTapDelay] = useState(300);
  const [doubleClickDelay, setDoubleClickDelay] = useState(300);
  const [doubleClickMaxStops, setDoubleClickMaxStops] = useState(2);
  const [keyboardMoveDistance, setKeyboardMoveDistance] = useState(50);
  const [wheelZoomDistanceFactor, setWheelZoomDistanceFactor] = useState(100);
  const [pinchZoomDistanceFactor, setPinchZoomDistanceFactor] = useState(100);
  const [scrollToZoom, setScrollToZoom] = useState(false);
  const handleClick = (itemIndex) => {
    setOpen(true);
    setIndex(itemIndex);
  };

  const closeModal = () => {
    setOpen(false);
    setIndex(-1);
  };

  // Custom hook for intersection observer
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isIntersecting];
};

  useEffect(() => {
    client
      .fetch(
        `*[_type == "imageGallery"] {
        title,
        slug,
        images[] {
          asset -> { 
            _id, 
            url,
            metadata { dimensions } // Get dimensions for aspect ratio
          },
          alt,
          description
        }
      }[0]` 
      )
      .then((data) => setGallery(data ? [data] : [])) 
      .catch(console.error);
  }, []);

  return (
    <>
      <GalleryFixedImage image={bgImage} />

      <section className="gallery-container container">
        <Box
          sx={{
            width: "100%",
            minHeight: 829,
            margin: "0 auto",
            padding: "0.5rem",
            position: "relative",
            zIndex: 10,
          }}
        >
          <section className="image-grid-section">
            <div className="image-grid-container container">
              <div className="columns">
                {gallery.map((item, itemIndex) =>
                  item.images?.map((image, imageIndex) => (
                    <div
                      key={`${itemIndex}-${imageIndex}`}
                      onClick={() => handleClick(imageIndex)}
                      className="fade-in-on-scroll visible "
                      style={{ '--delay': `${imageIndex * 0.1}s` }}
                    >
                      <img
                        src={image.asset.url}
                        alt={image.alt || "gallery image"}
                        loading="lazy"
                        style={{
                          quality: 100,
                        }}
                      />

                      <div className="image-description">
                        <h5>{image.description}</h5>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </section>
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
          animation={{ zoom: animationDuration }}
          plugins={[Zoom]}
          zoom={{
            maxZoomPixelRatio,
            zoomInMultiplier,
            doubleTapDelay,
            doubleClickDelay,
            doubleClickMaxStops,
            keyboardMoveDistance,
            wheelZoomDistanceFactor,
            pinchZoomDistanceFactor,
            scrollToZoom,
          }}
          styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
        />
      )}
    </>
  );
}
