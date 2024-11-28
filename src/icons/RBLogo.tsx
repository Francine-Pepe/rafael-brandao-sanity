import { NavLink } from "react-router-dom";
import rb from "../assets/rb-logo-cherry.svg";

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
