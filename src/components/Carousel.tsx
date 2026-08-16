import { useEffect, useRef, useState } from "react";
import { urlFor } from "../sanity/lib/image";

const delay = 4000;

type SanityImage = {
  _key?: string;
  asset: {
    _ref: string;
  };
  alt?: string;
};

type CarouselData = {
  desktopImages?: SanityImage[];
  tabletImages?: SanityImage[];
  mobileImages?: SanityImage[];
};

type CarouselProps = {
  data: CarouselData;
};

function Carousel({ data }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const desktopImages = data.desktopImages ?? [];
  const tabletImages = data.tabletImages ?? [];
  const mobileImages = data.mobileImages ?? [];

  const slideCount = Math.max(
    desktopImages.length,
    tabletImages.length,
    mobileImages.length,
  );

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
