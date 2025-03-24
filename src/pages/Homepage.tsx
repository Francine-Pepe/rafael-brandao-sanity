import { carouselImages } from "../data";
import Carousel from "../components/Carousel";
import LandpageAnimation from "../components/LandpageAnimation";

function Homepage() {
  return (
    <section className="homepage-container container">
      <div className="carousel-in-homepage">
        <LandpageAnimation />
        <Carousel data={carouselImages} />
      </div>
    </section>
  );
}

export default Homepage;
