import { CloseMenu } from "../../icons/CloseMenu";
import { PortableText } from "@portabletext/react";
import { useState, useEffect, useRef, useCallback } from "react";

function Modal(props) {
  const { slug, datas, image1, image2, image3, alt, body, onClose } = props;

  const [fullImage, setFullImage] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const overlayRef = useRef(null);
  const imageRef = useRef(null);
  const lastTouchRef = useRef(0);
  const touchStartRef = useRef({ x: 0, y: 0 });
  const coolingDownRef = useRef(false);
  const doubleTapTimeoutRef = useRef(null);

  // Improved touch handling with useCallback
  const preventDefault = useCallback((e) => {
    if (e.touches.length > 1) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, []);

  const handleImageTouchStart = useCallback((e) => {
    if (e.touches.length === 1) {
      touchStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
        time: Date.now(),
      };
    }
  }, []);

  const handleImageTouchEnd = useCallback((e, imageUrl) => {
    if (e.touches.length > 0) return;

    const touch = e.changedTouches[0];
    const endX = touch.clientX;
    const endY = touch.clientY;
    const deltaX = Math.abs(endX - touchStartRef.current.x);
    const deltaY = Math.abs(endY - touchStartRef.current.y);
    const deltaTime = Date.now() - touchStartRef.current.time;

    // If it's a tap (not swipe) and within reasonable time/distance
    if (deltaTime < 300 && deltaX < 10 && deltaY < 10) {
      // Check for double tap
      const now = Date.now();
      if (now - lastTouchRef.current < 300) {
        // Double tap detected - toggle zoom
        if (doubleTapTimeoutRef.current) {
          clearTimeout(doubleTapTimeoutRef.current);
          doubleTapTimeoutRef.current = null;
        }
        handleDoubleTap(imageUrl);
      } else {
        // Single tap - open full image after a delay to distinguish from double tap
        lastTouchRef.current = now;
        doubleTapTimeoutRef.current = setTimeout(() => {
          openFull(imageUrl);
          doubleTapTimeoutRef.current = null;
        }, 300);
      }
    }
  }, []);

  const handleDoubleTap = useCallback(
    (imageUrl) => {
      if (fullImage === imageUrl) {
        // Toggle zoom state
        setIsZoomed(!isZoomed);
      } else {
        openFull(imageUrl);
        setIsZoomed(true);
      }
    },
    [fullImage, isZoomed]
  );

  const openFull = useCallback((url) => {
    setFullImage(url);
    setIsZoomed(false);
    setImageLoaded(false);
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";
  }, []);

  const closeFull = useCallback(() => {
    setFullImage(null);
    setIsZoomed(false);
    coolingDownRef.current = true;
    // Restore body scroll
    document.body.style.overflow = "";

    setTimeout(() => {
      coolingDownRef.current = false;
    }, 300);
  }, []);

  const handleOverlayClick = useCallback(
    (e) => {
      if (coolingDownRef.current || isZoomed) return;

      // Additional iOS-specific protection
      if (e.type === "touchend" && e.changedTouches.length > 0) {
        const touch = e.changedTouches[0];
        const now = Date.now();

        if (now - lastTouchRef.current < 500) return;
        lastTouchRef.current = now;

        // Check if this is actually a scroll/zoom gesture
        const deltaX = Math.abs(touch.clientX - touchStartRef.current.x);
        const deltaY = Math.abs(touch.clientY - touchStartRef.current.y);

        if (deltaX > 10 || deltaY > 10) return; // Likely a gesture, not a click
      }

      closeFull();
    },
    [isZoomed, closeFull]
  );

  const handleImageClick = useCallback(
    (e, imageUrl) => {
      e.stopPropagation();
      openFull(imageUrl);
    },
    [openFull]
  );

  const handleFullImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  const handleKeyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && fullImage) {
        closeFull();
      }
    },
    [fullImage, closeFull]
  );

  // Effect for event listeners
  useEffect(() => {
    if (fullImage) {
      document.addEventListener("keydown", handleKeyPress);
      // Prevent background scroll on iOS
      document.body.style.touchAction = "none";
    } else {
      document.removeEventListener("keydown", handleKeyPress);
      document.body.style.touchAction = "";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      document.body.style.touchAction = "";
      if (doubleTapTimeoutRef.current) {
        clearTimeout(doubleTapTimeoutRef.current);
      }
    };
  }, [fullImage, handleKeyPress]);

  // Render image with proper touch handlers
  const renderImage = (imageUrl, className, key) => {
    if (!imageUrl) return null;

    return (
      <img
        key={key}
        src={imageUrl}
        alt={alt}
        className={className}
        loading="lazy"
        onClick={(e) => handleImageClick(e, imageUrl)}
        onTouchStart={handleImageTouchStart}
        onTouchEnd={(e) => handleImageTouchEnd(e, imageUrl)}
        onTouchMove={preventDefault}
        style={{
          cursor: "zoom-in",
          maxWidth: "100%",
          height: "auto",
          touchAction: "manipulation",
        }}
      />
    );
  };

  return (
    <section className="modal">
      <div key={slug} className="modal-content" aria-modal="true" role="dialog">
        <div className="modal-close-button">
          <CloseMenu
            style={{
              filter:
                "brightness(0) saturate(100%) invert(8%) sepia(13%) saturate(2785%) hue-rotate(279deg) brightness(94%) contrast(112%)",
            }}
            onClick={onClose}
            aria-label="Close modal"
          />
        </div>
        <div className="modal-content-wrap">
          <div className="modal-image">
            <div className="grid-modal-images">
              {renderImage(image1, "modal-image1", "image1")}
              {renderImage(image2, "modal-image2", "image2")}
              {renderImage(image3, "modal-image3", "image3")}
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
          ref={overlayRef}
          className="image-overlay"
          onClick={handleOverlayClick}
          onTouchStart={preventDefault}
          onTouchMove={preventDefault}
        >
          <div
            className={`image-container ${isZoomed ? "zoomed" : ""} ${imageLoaded ? "loaded" : "loading"}`}
          >
            <img
              ref={imageRef}
              src={fullImage}
              alt={alt}
              className="image-overlay-content"
              onClick={(e) => {
                e.stopPropagation();
                if (isZoomed) {
                  setIsZoomed(false);
                } else {
                  handleDoubleTap(fullImage);
                }
              }}
              onTouchStart={handleImageTouchStart}
              onTouchEnd={(e) => handleImageTouchEnd(e, fullImage)}
              onLoad={handleFullImageLoad}
              style={{
                transform: isZoomed ? "scale(2)" : "scale(1)",
                transition: "transform 0.3s ease",
                cursor: isZoomed ? "zoom-out" : "zoom-in",
                touchAction: isZoomed ? "none" : "pan-x pan-y pinch-zoom",
              }}
            />
            {!imageLoaded && <div className="image-loading">Loading...</div>}
          </div>

          {/* Zoom controls */}
          <div className="zoom-controls">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsZoomed(!isZoomed);
              }}
              className="zoom-button"
              aria-label={isZoomed ? "Zoom out" : "Zoom in"}
            >
              {isZoomed ? "−" : "+"}
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeFull();
              }}
              className="close-button"
              aria-label="Close image"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Modal;
