import { useEffect, useRef, useState } from "react";
import client from "../client";

const delay = 4000;

const carouselQuery = `
  *[_type == "carousel"][0] {
    _id,
    title,

    desktopImages[] {
      _key,
      "url": asset->url,
      alt
    },

    tabletImages[] {
      _key,
      "url": asset->url,
      alt
    },

    mobileImages[] {
      _key,
      "url": asset->url,
      alt
    }
  }
`;

type SanityImage = {
  _key?: string;
  url?: string;
  alt?: string;
};

type CarouselData = {
  _id: string;
  title: string;
  desktopImages?: SanityImage[];
  tabletImages?: SanityImage[];
  mobileImages?: SanityImage[];
};

function getImageUrl(url: string, width: number) {
  return `${url}?w=${width}&auto=format&fit=max&q=85`;
}

function Carousel() {
  const [carousel, setCarousel] = useState<CarouselData | null>(null);
  const [index, setIndex] = useState(0);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Fetch carousel from Sanity
  useEffect(() => {
    const fetchCarousel = async () => {
      try {
        const data = await client.fetch<CarouselData>(carouselQuery);
        setCarousel(data);
      } catch (error) {
        console.error("Error fetching carousel from Sanity:", error);
      }
    };

    fetchCarousel();
  }, []);

  const desktopImages = carousel?.desktopImages ?? [];
  const tabletImages = carousel?.tabletImages ?? [];
  const mobileImages = carousel?.mobileImages ?? [];

  const slideCount = Math.max(
    desktopImages.length,
    tabletImages.length,
    mobileImages.length,
  );

  // Automatically change slides
  useEffect(() => {
    if (slideCount <= 1) {
      setIndex(0);
      return;
    }

    timeoutRef.current = setTimeout(() => {
      setIndex((previousIndex) =>
        previousIndex === slideCount - 1 ? 0 : previousIndex + 1,
      );
    }, delay);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [index, slideCount]);

  if (!carousel || slideCount === 0) {
    return null;
  }

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{
          transform: `translate3d(${-index * 100}%, 0, 0)`,
        }}
      >
        {Array.from({ length: slideCount }).map((_, itemIndex) => {
          const desktop = desktopImages[itemIndex];
          const tablet = tabletImages[itemIndex];
          const mobile = mobileImages[itemIndex];

          const fallbackImage = desktop || tablet || mobile;

          if (!fallbackImage?.url) {
            return null;
          }

          return (
            <div
              className="slide"
              key={desktop?._key || tablet?._key || mobile?._key || itemIndex}
            >
              <picture>
                {/* Mobile */}
                {mobile?.url && (
                  <source
                    media="(max-width: 767px)"
                    srcSet={getImageUrl(mobile.url, 1080)}
                  />
                )}

                {/* Tablet */}
                {tablet?.url && (
                  <source
                    media="(max-width: 1023px)"
                    srcSet={getImageUrl(tablet.url, 1440)}
                  />
                )}

                {/* Desktop */}
                <img
                  src={getImageUrl(fallbackImage.url, 1920)}
                  alt={desktop?.alt || tablet?.alt || mobile?.alt || ""}
                />
              </picture>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
