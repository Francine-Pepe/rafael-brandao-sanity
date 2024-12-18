import { NavLink, useLocation } from "react-router-dom";
/* import RafaLogo from "../assets/rafa-logo-blue.svg"; */
/* import RafaLogo from "../assets/rafa-logo-blue2.svg"; */
import RafaLogo from "../assets/rafa-logo-cherry.svg";
import RafaLogoStroke from "../assets/rafa-logo-cherry-noRect.svg";

function Logo(props: any) {
  const homeUrl = useLocation().pathname;
  const { style } = props;

  return (
    <div className="logo">
      <NavLink to="/">
        {homeUrl === "/" ? (
          <img src={RafaLogo} alt="Rafa Brandao logo" />
        ) : (
          <img src={RafaLogoStroke} alt="Rafa Brandao logo" style={style} />
        )}
      </NavLink>
    </div>
  );
}

export default Logo;
