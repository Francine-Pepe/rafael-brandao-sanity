import { NavLink } from "react-router-dom";
/* import RafaLogo from "../assets/rafa-logo-blue.svg"; */
/* import RafaLogo from "../assets/rafa-logo-blue2.svg"; */
import RafaLogo from "../assets/rafa-logo-cherry.svg";

function Logo() {
  return (
    <div className="logo">
      <NavLink to="/">
        <img src={RafaLogo} alt="Rafa Brandao logo" />
      </NavLink>
    </div>
  );
}

export default Logo;
