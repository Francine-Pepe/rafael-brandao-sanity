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
import { useTranslation } from "react-i18next";

function NavbarMobile() {
  const [isActive, setIsActive] = useState(false);
  const [style, setStyle] = useState("#F2F2F2");
  const homeUrl = useLocation().pathname;
  const { t } = useTranslation();

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
          <Logo
            style={{
              filter: `${homeUrl === "/" ? " brightness(0) saturate(100%) invert(99%) sepia(73%) saturate(60%) hue-rotate(239deg) brightness(116%) contrast(90%)" : "brightness(0) saturate(100%) invert(10%) sepia(55%) saturate(6527%) hue-rotate(313deg) brightness(95%) contrast(100%)"}`,
            }}
          />
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
              <NavProps data={t("nav", { returnObjects: true }) as []} />
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
