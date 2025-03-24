import React from "react";
import { Link } from "react-router-dom";

function LandpageAnimation() {
  return (
    <section className="landpage-animation-box animate__fadeIn">
      <Link to={"/biografia"}>cantor e compositor</Link>
    </section>
  );
}

export default LandpageAnimation;
