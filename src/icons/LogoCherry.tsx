import { NavLink } from "react-router-dom";
import RafaLogo from "../assets/Rafa-logo-cherry-.svg";

function LogoCherry(props: any) {
  const { style } = props;

  return (
    <div className="logo">
      <NavLink to="/">
        <img src={RafaLogo} alt="Rafa Brandao logo" style={style} />
      </NavLink>
    </div>
  );
}

export default LogoCherry;
