import React, { useState } from "react";
import { CloseMenu } from "../../icons/CloseMenu";
import { OpenMenu } from "../../icons/OpenMenu";
import NavProps from "./NavProps";
import { Navigation } from "../../data";
import Logo from "../../icons/Logo";
import { useLocation } from "react-router-dom";

function NavbarMobile() {
  const [isActive, setIsActive] = useState(false);
  const homeUrl = useLocation().pathname;

  function toggle() {
    setIsActive((isActive) => !isActive);
  }
  return (
    <section className="navbar-mobile-container container">
      <div
        onClick={() => setIsActive(!isActive)}
        className="navbar-mobile-content"
        style={{
          backgroundColor:
            `${homeUrl === "/" ? "transparent" : "#F2F2F2"}` 
        }}
      >
        <div className="mobile-logo">
          <Logo />
        </div>
        <div>{isActive ? <CloseMenu /> : <OpenMenu />}</div>
      </div>

      <div onClick={toggle} className="navbar-mobile">
        {isActive && (
          <NavProps
            data={Navigation}
            style={{
              backgroundColor: `${ homeUrl === "/biografia"  ? "transparent" : "#F2F2F2"}`,
            }}
          />
        )}
      </div>
    </section>
  );
}

export default NavbarMobile;
