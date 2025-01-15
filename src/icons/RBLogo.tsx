import { NavLink } from "react-router-dom";
import rb from "../assets/logo-rafa-contact.svg";

function RBLogo() {
  return (
    <div className="footer-logo">
      <NavLink to="/">
        <img src={rb} alt="footer logo" />
      </NavLink>
    </div>
  );
}

export default RBLogo;
