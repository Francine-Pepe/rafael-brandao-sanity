import { CloseMenu } from "../../icons/CloseMenu";
import { PortableText } from "@portabletext/react";
import { useState, useEffect } from "react";
import { useRef } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function Modal(props) {
  const { slug, datas, image1, image2, image3, alt, body, onClose } = props;

  const [fullImage, setFullImage] = useState(null);
  const [coolingDown, setCoolingDown] = useState(false);
  const lastTouchRef = useRef(0);

  const openFull = (url) => setFullImage(url);
  const closeFull = () => setFullImage(null);

  const handleOverlayClick = (e) => {
    // Prevent closure during zoom or touch gestures
    if (coolingDown) return;

    // Additional iOS-specific protection
    if (e.type === "touchend" && e.changedTouches.length > 0) {
      const touch = e.changedTouches[0];
      const now = Date.now();

      // Ignore rapid successive touches (common during zoom)
      if (now - lastTouchRef.current < 500) return;
      lastTouchRef.current = now;
    }

    closeFull();
  };

  const preventDefault = (e) => {
    if (e.touches.length > 1) {
      // Multi-touch (zoom gesture)
      e.preventDefault();
    }
  };

  return (
    <section className="modal">
      <div key={slug} className="modal-content " aria-modal="true">
        <div className="modal-close-button">
          <CloseMenu
            style={{
              filter:
                "brightness(0) saturate(100%) invert(8%) sepia(13%) saturate(2785%) hue-rotate(279deg) brightness(94%) contrast(112%)",
            }}
            onClick={onClose}
          />
        </div>
        <div className="modal-content-wrap">
          <div className="modal-image">
            <div className="grid-modal-images">
              <Zoom>
                {image1 && (
                  <img
                    src={image1}
                    alt={alt}
                    className="modal-image1"
                    loading="lazy"
                    onClick={() => openFull(image1)}
                    style={{
                      cursor: "zoom-in",
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                )}
              </Zoom>
              <Zoom>
                {image2 && (
                  <img
                    src={image2}
                    alt={alt}
                    className="modal-image2"
                    loading="lazy"
                    style={{
                      cursor: "zoom-in",
                      maxWidth: "100%",
                      height: "auto",
                    }}
                    onClick={() => openFull(image2)}
                  />
                )}
              </Zoom>
              <Zoom>
                {image3 && (
                  <img
                    src={image3}
                    alt={alt}
                    className="modal-image3"
                    loading="lazy"
                    style={{
                      cursor: "zoom-in",
                      maxWidth: "100%",
                      height: "auto",
                    }}
                    onClick={() => openFull(image3)}
                  />
                )}
              </Zoom>
            </div>
          </div>
          <div className="modal-text">
            <h2>{datas}</h2>
            <PortableText value={body} />
          </div>
        </div>
      </div>
      {fullImage && (
        <div
          className="image-overlay"
          onClick={handleOverlayClick}
          onTouchStart={preventDefault}
          onTouchMove={preventDefault}
        >
          <img
            src={fullImage}
            alt={alt}
            className="image-overlay-content"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

export default Modal;
