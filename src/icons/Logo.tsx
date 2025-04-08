import { NavLink, useLocation } from "react-router-dom";
import RafaLogo from "../assets/Rafa-logo.svg";
import RafaLogoCherry from "../assets/Rafa-logo-cherry_.svg";
/* import RafaLogoStroke from "../assets/rafa-logo-cherry-noRect.svg"; */

function Logo(props: any) {
  const homeUrl = useLocation().pathname;
  const { style } = props;

  return (
    <div className="logo">
      <NavLink to="/">
        {homeUrl === "/" ? (
          <img src={RafaLogo} alt="Rafa Brandao logo" />
        ) : (
          <img src={RafaLogoCherry} alt="Rafa Brandao logo" />
        )}
      </NavLink>
    </div>
  );
}

export default Logo;
