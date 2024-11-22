import { NavLink } from "react-router-dom";
import RafaLogo from "../assets/rafa-logo-blue.svg";

function Logo() {
  return (
    <div>
      <NavLink to="/">
        <img src={RafaLogo} alt="Rafa Brandao logo" />
      </NavLink>
    </div>
  );
}

export default Logo;
