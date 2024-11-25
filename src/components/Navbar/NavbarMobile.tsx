import React, { useState } from "react";
import { CloseMenu } from "../../icons/CloseMenu";
import { OpenMenu } from "../../icons/OpenMenu";
import NavProps from "./NavProps";
import { Navigation } from "../../data";
import Logo from "../../icons/Logo";

function NavbarMobile() {
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive((isActive) => !isActive);
  }
  return (
    <section className="navbar-mobile-container container">
      <div
        onClick={() => setIsActive(!isActive)}
        className="navbar-mobile-content"
      >
        <div className="mobile-logo">
          <Logo />
        </div>
        <div>{isActive ? <CloseMenu /> : <OpenMenu />}</div>
      </div>

      <div onClick={toggle} className="navbar-mobile">
        {isActive && <NavProps data={Navigation} />}
      </div>
    </section>
  );
}

export default NavbarMobile;
