import { NavLink, useLocation } from "react-router-dom";
/* import RafaLogo from "../assets/rafa-logo-blue.svg"; */
/* import RafaLogo from "../assets/rafa-logo-blue2.svg"; */
import RafaLogo from "../assets/rafa-logo-cherry.svg";
import RafaLogoStroke from "../assets/rafa-logo-cherry-noRect.svg";

function Logo() {
  const homeUrl = useLocation().pathname;

  return (
    <div className="logo">
      <NavLink to="/">
        {homeUrl === "/" ? (
          <img src={RafaLogo} alt="Rafa Brandao logo" />
        ) : (
          <img src={RafaLogoStroke} alt="Rafa Brandao logo" />
        )}
      </NavLink>
    </div>
  );
}

export default Logo;
