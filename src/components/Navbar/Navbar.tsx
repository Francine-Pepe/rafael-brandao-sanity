import React, { useState } from "react";
import NavProps from "./NavProps";
import { Navigation } from "../../data";
import { Spotify } from "../../icons/Spotify";
import { Instagram } from "../../icons/Instagram";
import { Youtube } from "../../icons/Youtube";
import Logo from "../../icons/Logo";
import NavbarMobile from "./NavbarMobile";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageFlag from "../LanguageFlag";

function Navbar() {
  const [colorChange, setColorChange] = useState(false);
  const homeUrl = useLocation().pathname;

  const { t, i18n } = useTranslation();

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
          backgroundColor: `${homeUrl === "/" ? "transparent" : "rgb(242, 242, 242"}`,
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
      <div className="mobile">
        <NavbarMobile />
      </div>
    </>
  );
}

export default Navbar;
