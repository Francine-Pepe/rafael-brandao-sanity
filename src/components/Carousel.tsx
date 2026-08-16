import { useEffect, useRef, useState } from "react";
import client from "../client";
import { urlFor } from "../sanity/lib/image";

const delay = 4000;

const carouselQuery = `
  *[_type == "carousel"][0] {
    _id,
    title,
    desktopImages[] {
      _key,
      asset,
      alt
    },
    tabletImages[] {
      _key,
      asset,
      alt
    },
    mobileImages[] {
      _key,
      asset,
      alt
    }
  }
`;

type SanityImage = {
  _key?: string;
  asset: {
    _ref: string;
  };
  alt?: string;
};

type CarouselData = {
  _id: string;
  title: string;
  desktopImages?: SanityImage[];
  tabletImages?: SanityImage[];
  mobileImages?: SanityImage[];
};

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
        console.error("Error fetching carousel:", error);
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

  // Carousel timer
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

  // Don't render until Sanity data is available
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

          if (!fallbackImage) {
            return null;
          }

          return (
            <div
              className="slide"
              key={
                desktop?._key ||
                tablet?._key ||
                mobile?._key ||
                fallbackImage.asset._ref
              }
            >
              <picture>
                {mobile && (
                  <source
                    media="(max-width: 767px)"
                    srcSet={urlFor(mobile).auto("format").url()}
                  />
                )}

                {tablet && (
                  <source
                    media="(max-width: 1023px)"
                    srcSet={urlFor(tablet).auto("format").url()}
                  />
                )}

                <img
                  src={urlFor(fallbackImage).auto("format").url()}
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
