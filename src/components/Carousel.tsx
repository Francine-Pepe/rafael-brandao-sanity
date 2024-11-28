import React, { useEffect, useRef, useState } from "react";

const delay = 4000;

function Carousel(props: any) {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setInterval>>();
  const { data } = props;

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === data.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {data.map((item: { image: any }, index: any) => (
          <div className="slide" key={index}>
            <img src={item.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
