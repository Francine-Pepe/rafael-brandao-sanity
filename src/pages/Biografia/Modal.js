import { CloseMenu } from "../../icons/CloseMenu";
import { PortableText } from "@portabletext/react";
import { useState, useEffect } from "react";

function Modal(props) {
  const { slug, datas, image1, image2, image3, alt, body, onClose } = props;

  const [fullImage, setFullImage] = useState(null);
  const [isPinching, setIsPinching] = useState(false);

  const openFull = (url) => setFullImage(url);
  const closeFull = () => setFullImage(null);

  useEffect(() => {
    const handleStart = (e) => {
      if (e.touches && e.touches.length > 1) setIsPinching(true);
    };
    const handleEnd = (e) => {
      // when all fingers lifted, allow closing again
      if (!e.touches || e.touches.length === 0) setIsPinching(false);
    };

    window.addEventListener("touchstart", handleStart, { passive: true });
    window.addEventListener("touchend", handleEnd, { passive: true });
    window.addEventListener("touchcancel", handleEnd, { passive: true });

    return () => {
      window.removeEventListener("touchstart", handleStart);
      window.removeEventListener("touchend", handleEnd);
      window.removeEventListener("touchcancel", handleEnd);
    };
  }, []);

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
          onClick={() => {
            if (!isPinching) closeFull();
          }}
          aria-hidden="true"
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
