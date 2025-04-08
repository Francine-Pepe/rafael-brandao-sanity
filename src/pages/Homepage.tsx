import {
  carouselImages,
  carouselImagesIpad,
  carouselImagesMobile,
} from "../data";
import Carousel from "../components/Carousel";
import LandpageAnimation from "../components/LandpageAnimation";
import { useViewport } from "react-viewport-hooks";

function Homepage() {
  const { vw } = useViewport();
  return (
    <section className="homepage-container container">
      <div className="carousel-in-homepage">
        <LandpageAnimation />
        {vw > 1080 ? (
          <Carousel data={carouselImages} />
        ) : vw > 768 ? (
          <Carousel data={carouselImagesIpad} />
        ) : (
          <Carousel data={carouselImagesMobile} />
        )}
      </div>
    </section>
  );
}

export default Homepage;
