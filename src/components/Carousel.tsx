import { useEffect, useRef, useState } from "react";

const delay = 4000;

type CarouselItem = {
  image: string;
  alt: string;
};

type CarouselProps = {
  data: CarouselItem[];
};

function Carousel({ data }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (data.length <= 1) {
      setIndex(0);
      return;
    }

    timeoutRef.current = setTimeout(() => {
      setIndex((previousIndex) =>
        previousIndex === data.length - 1 ? 0 : previousIndex + 1,
      );
    }, delay);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [index, data.length]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {data.map((item, itemIndex) => (
          <div className="slide" key={item.image || itemIndex}>
            <img src={item.image} alt={item.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
