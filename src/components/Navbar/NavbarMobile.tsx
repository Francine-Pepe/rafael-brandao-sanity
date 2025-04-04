import React, { useState } from "react";
import { CloseMenu } from "../../icons/CloseMenu";
import { OpenMenu } from "../../icons/OpenMenu";
import NavProps from "./NavProps";
import { Navigation } from "../../data";
import Logo from "../../icons/Logo";
import { useLocation } from "react-router-dom";
import LanguageSelector from "../LanguageSelector";
import { Spotify } from "../../icons/Spotify";
import { Instagram } from "../../icons/Instagram";
import { Youtube } from "../../icons/Youtube";

function NavbarMobile() {
  const [isActive, setIsActive] = useState(false);
  const [style, setStyle] = useState("#F2F2F2");
  const homeUrl = useLocation().pathname;

  function toggle() {
    setIsActive((isActive) => !isActive);
  }

  const changeLinkColor = () => {
    if (isActive) {
      setStyle(style);
    } else {
      setStyle("rgba(32, 0, 15, 1)");
    }
  };

  window.addEventListener("click", changeLinkColor);

  return (
    <section className="navbar-mobile-container container">
      <div
        onClick={() => setIsActive(!isActive)}
        className="navbar-mobile-content"
        style={{
          backgroundColor: `${homeUrl === "/" || isActive ? "transparent" : "#F2F2F2"}`,
        }}
      >
        <div className="mobile-logo">
          <Logo />
        </div>
        <div className="mobile-menu">
          {isActive ? <CloseMenu /> : <OpenMenu />}
        </div>
      </div>

      <div
        onClick={() => {
          toggle();
          changeLinkColor();
        }}
        className={style ? "navbar-mobile changeLinkColor" : "navbar-mobile "}
      >
        {isActive && (
          <div className="navbar-mobile-active">
            <div className="lng-selector-mobile">
              <LanguageSelector />
              <NavProps data={Navigation} />
              <hr />
              <div className="social-media-mobile">
                <Spotify />
                <Instagram />
                <Youtube />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default NavbarMobile;
