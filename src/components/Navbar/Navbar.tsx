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
          backgroundColor: `${homeUrl === "/" && "transparent"}`,
        }}
      >
        <section className="navigation-logo">
          <Logo
            style={{
              filter: `${homeUrl === "/" || homeUrl === "/galeria" ? " brightness(0) saturate(100%) invert(99%) sepia(73%) saturate(60%) hue-rotate(239deg) brightness(116%) contrast(90%)" : "brightness(0) saturate(100%) invert(10%) sepia(55%) saturate(6527%) hue-rotate(313deg) brightness(95%) contrast(100%)"}`,
            }}
          />
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
