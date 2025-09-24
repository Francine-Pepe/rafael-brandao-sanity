import { CloseMenu } from "../../icons/CloseMenu";
import { PortableText } from "@portabletext/react";
import { useState, useEffect, useRef, useCallback } from "react";

function Modal(props) {
  const { slug, datas, image1, image2, image3, alt, body, onClose } = props;

  const [fullImage, setFullImage] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const overlayRef = useRef(null);
  const imageRef = useRef(null);
  const lastTouchRef = useRef(0);
  const touchStartRef = useRef({ x: 0, y: 0 });
  const dragStartRef = useRef({ x: 0, y: 0 });
  const coolingDownRef = useRef(false);
  const doubleTapTimeoutRef = useRef(null);

  // Improved touch handling
  const preventDefault = useCallback(
    (e) => {
      if (e.touches.length > 1 && isZoomed) {
        e.preventDefault();
        e.stopPropagation();
      }
    },
    [isZoomed]
  );

  const handleImageTouchStart = useCallback(
    (e) => {
      if (e.touches.length === 1) {
        touchStartRef.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
          time: Date.now(),
        };

        if (isZoomed) {
          // Start dragging for panning
          setIsDragging(true);
          dragStartRef.current = {
            x: e.touches[0].clientX - imagePosition.x,
            y: e.touches[0].clientY - imagePosition.y,
          };
        }
      }
    },
    [isZoomed, imagePosition]
  );

  const handleImageTouchMove = useCallback(
    (e) => {
      if (!isZoomed || !isDragging) return;

      if (e.touches.length === 1) {
        e.preventDefault();
        e.stopPropagation();

        const touch = e.touches[0];
        const newX = touch.clientX - dragStartRef.current.x;
        const newY = touch.clientY - dragStartRef.current.y;

        // Calculate boundaries to prevent dragging beyond image edges
        const imageRect = imageRef.current?.getBoundingClientRect();
        const overlayRect = overlayRef.current?.getBoundingClientRect();

        if (imageRect && overlayRect) {
          const maxX = Math.max(0, (imageRect.width - overlayRect.width) / 2);
          const maxY = Math.max(0, (imageRect.height - overlayRect.height) / 2);

          const constrainedX = Math.max(-maxX, Math.min(maxX, newX));
          const constrainedY = Math.max(-maxY, Math.min(maxY, newY));

          setImagePosition({ x: constrainedX, y: constrainedY });
        }
      }
    },
    [isZoomed, isDragging]
  );

  const handleImageTouchEnd = useCallback(
    (e, imageUrl) => {
      setIsDragging(false);

      if (e.touches.length > 0) return;

      const touch = e.changedTouches[0];
      const endX = touch.clientX;
      const endY = touch.clientY;
      const deltaX = Math.abs(endX - touchStartRef.current.x);
      const deltaY = Math.abs(endY - touchStartRef.current.y);
      const deltaTime = Date.now() - touchStartRef.current.time;

      // If dragging/panning, don't trigger tap actions
      if (isZoomed && (deltaX > 5 || deltaY > 5)) {
        return;
      }

      // If it's a tap (not drag) and within reasonable time/distance
      if (deltaTime < 300 && deltaX < 10 && deltaY < 10) {
        const now = Date.now();
        if (now - lastTouchRef.current < 300) {
          // Double tap detected
          if (doubleTapTimeoutRef.current) {
            clearTimeout(doubleTapTimeoutRef.current);
            doubleTapTimeoutRef.current = null;
          }
          handleDoubleTap();
        } else {
          // Single tap
          lastTouchRef.current = now;
          doubleTapTimeoutRef.current = setTimeout(() => {
            if (!isZoomed) {
              openFull(imageUrl);
            } else {
              // Single tap when zoomed - close zoom or reset position
              resetImagePosition();
            }
            doubleTapTimeoutRef.current = null;
          }, 300);
        }
      }
    },
    [isZoomed]
  );

  // Mouse event handlers for desktop
  const handleMouseDown = useCallback(
    (e) => {
      if (!isZoomed) return;

      e.preventDefault();
      setIsDragging(true);
      dragStartRef.current = {
        x: e.clientX - imagePosition.x,
        y: e.clientY - imagePosition.y,
      };
    },
    [isZoomed, imagePosition]
  );

  const handleMouseMove = useCallback(
    (e) => {
      if (!isZoomed || !isDragging) return;

      e.preventDefault();
      const newX = e.clientX - dragStartRef.current.x;
      const newY = e.clientY - dragStartRef.current.y;

      // Calculate boundaries
      const imageRect = imageRef.current?.getBoundingClientRect();
      const overlayRect = overlayRef.current?.getBoundingClientRect();

      if (imageRect && overlayRect) {
        const maxX = Math.max(0, (imageRect.width - overlayRect.width) / 2);
        const maxY = Math.max(0, (imageRect.height - overlayRect.height) / 2);

        const constrainedX = Math.max(-maxX, Math.min(maxX, newX));
        const constrainedY = Math.max(-maxY, Math.min(maxY, newY));

        setImagePosition({ x: constrainedX, y: constrainedY });
      }
    },
    [isZoomed, isDragging]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const resetImagePosition = useCallback(() => {
    setImagePosition({ x: 0, y: 0 });
  }, []);

  const handleDoubleTap = useCallback(() => {
    if (isZoomed) {
      // Double tap when zoomed - zoom out or reset position
      setIsZoomed(false);
      resetImagePosition();
    } else {
      // Double tap when not zoomed - zoom in
      setIsZoomed(true);
    }
  }, [isZoomed]);

  const openFull = useCallback((url) => {
    setFullImage(url);
    setIsZoomed(false);
    resetImagePosition();
    setImageLoaded(false);
    document.body.style.overflow = "hidden";
  }, []);

  const closeFull = useCallback(() => {
    setFullImage(null);
    setIsZoomed(false);
    resetImagePosition();
    coolingDownRef.current = true;
    document.body.style.overflow = "";

    setTimeout(() => {
      coolingDownRef.current = false;
    }, 300);
  }, []);

  const handleOverlayClick = useCallback(
    (e) => {
      if (coolingDownRef.current) return;

      if (!isZoomed) {
        closeFull();
      }
    },
    [isZoomed, closeFull]
  );

  const handleFullImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  const handleKeyPress = useCallback(
    (e) => {
      if (e.key === "Escape") {
        if (isZoomed) {
          setIsZoomed(false);
          resetImagePosition();
        } else {
          closeFull();
        }
      }
    },
    [isZoomed, closeFull]
  );

  // Effect for event listeners
  useEffect(() => {
    if (fullImage) {
      document.addEventListener("keydown", handleKeyPress);
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
        onClick={() => openFull(imageUrl)}
        style={{
          cursor: "zoom-in",
          maxWidth: "100%",
          height: "auto",
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
        >
          <div
            className={`image-container ${isZoomed ? "zoomed" : ""} ${imageLoaded ? "loaded" : "loading"} ${isDragging ? "dragging" : ""}`}
          >
            <img
              ref={imageRef}
              src={fullImage}
              alt={alt}
              className="image-overlay-content"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={handleImageTouchStart}
              onTouchMove={handleImageTouchMove}
              onTouchEnd={(e) => handleImageTouchEnd(e, fullImage)}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onLoad={handleFullImageLoad}
              style={{
                transform: isZoomed ? "scale(2)" : "scale(1)",
                transformOrigin: "center center",
                transition: isDragging ? "none" : "transform 0.3s ease",
                cursor: isZoomed
                  ? isDragging
                    ? "grabbing"
                    : "grab"
                  : "zoom-in",
                position: isZoomed ? "relative" : "static",
                left: isZoomed ? `${imagePosition.x}px` : "auto",
                top: isZoomed ? `${imagePosition.y}px` : "auto",
                touchAction: isZoomed ? "none" : "pan-x pan-y pinch-zoom",
              }}
            />
            {!imageLoaded && <div className="image-loading">Loading...</div>}
          </div>

          {/* Controls */}
          <div className="image-controls">
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (isZoomed) {
                  resetImagePosition();
                } else {
                  setIsZoomed(!isZoomed);
                }
              }}
              className="control-button"
              aria-label={isZoomed ? "Reset position" : "Zoom in"}
            >
              {isZoomed ? "↺" : "+"}
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeFull();
              }}
              className="control-button"
              aria-label="Close image"
            >
              ×
            </button>
          </div>

          {/* Navigation hint when zoomed */}
          {isZoomed && (
            <div className="zoom-hint">
              Drag to navigate • Double-tap to zoom out
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export default Modal;
