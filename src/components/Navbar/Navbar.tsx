import React, { useState } from "react";
import NavProps from "./NavProps";
import { Navigation } from "../../data";
import { Spotify } from "../../icons/Spotify";
import { Instagram } from "../../icons/Instagram";
import { Youtube } from "../../icons/Youtube";
import Logo from "../../icons/Logo";
import NavbarMobile from "./NavbarMobile";
import { useLocation } from "react-router-dom";
import LanguageFlag from "../LanguageFlag";

function Navbar() {
  const [colorChange, setColorChange] = useState(false);
  const homeUrl = useLocation().pathname;

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);

  return (
    <>
      <section
        className={
          colorChange ? "navbar-container colorChange" : "navbar-container"
        }
        style={{
          backgroundColor: `${homeUrl === "/" && "transparent" }`,
        }}
      >
        <section className="navigation-logo">
          <Logo />
        </section>
        <section className="navigation-links">
          <NavProps data={Navigation} style={{ color: "rgba(32, 0, 15, 1)" }} />
        </section>
        <section className="navigation-social-media">
          <Spotify />
          <Instagram />
          <Youtube />
          <LanguageFlag />
        </section>
      </section>
      <section className="mobile">
        <NavbarMobile />
      </section>
    </>
  );
}

export default Navbar;
