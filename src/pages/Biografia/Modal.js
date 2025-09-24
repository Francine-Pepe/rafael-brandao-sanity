import { CloseMenu } from "../../icons/CloseMenu";
import { PortableText } from "@portabletext/react";
import { useState, useEffect } from "react";
import { useRef } from "react";

function Modal(props) {
  const { slug, datas, image1, image2, image3, alt, body, onClose } = props;

  const [fullImage, setFullImage] = useState(null);
  const [coolingDown, setCoolingDown] = useState(false);
  const zoomLevelRef = useRef(1);

  const openFull = (url) => setFullImage(url);
  const closeFull = () => setFullImage(null);

  const getZoom = () => {
    // window.visualViewport.scale is iOS-supported
    return window.visualViewport ? window.visualViewport.scale : 1;
  };

  useEffect(() => {
    const handleResize = () => {
      const currentZoom = getZoom();
      if (Math.abs(currentZoom - zoomLevelRef.current) > 0.01) {
        zoomLevelRef.current = currentZoom;
        setCoolingDown(true);
        // reset after 500 ms
        setTimeout(() => setCoolingDown(false), 500);
      }
    };

    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", handleResize);
    }
    return () => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  const handleOverlayClick = () => {
    if (coolingDown) return; // ignore ghost click during/after zoom
    closeFull();
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
        <div className="image-overlay" onClick={handleOverlayClick}>
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
