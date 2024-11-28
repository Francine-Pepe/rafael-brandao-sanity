import React from "react";
import NavProps from "./NavProps";
import { Navigation } from "../../data";
import { Spotify } from "../../icons/Footer/Spotify";
import { Instagram } from "../../icons/Instagram";
import { Youtube } from "../../icons/Footer/Youtube";
import Logo from "../../icons/Logo";
import NavbarMobile from "./NavbarMobile";

function Navbar() {
  return (
    <>
      <div className="navbar-container container">
        <section className="navigation-logo">
          <Logo />
        </section>
        <section className="navigation-links">
          <NavProps data={Navigation} />
        </section>
        <section className="navigation-social-media">
          <Spotify />
          <Instagram />
          <Youtube />
        </section>
      </div>
      <div className="mobile">
        <NavbarMobile />
      </div>
    </>
  );
}

export default Navbar;
