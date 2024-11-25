import { carouselImages } from "../data";
import Carousel from "../components/Carousel";

function Homepage() {
  return (
    <section className="homepage-container container">
      <div className="carousel-in-homepage">
        <Carousel data={carouselImages} />
      </div>
    </section>
  );
}

export default Homepage;
