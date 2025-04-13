import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

function NavProps(props: any) {
  const { data, style } = props;

  return (
    <nav className="navlinks-props">
      {(Array.isArray(data) ? data : []).map(
        (item: { name: string; link: string }, index: any) => (
          <ul key={index}>
            <li>
              <NavLink to={item.link} style={style}>
                {item.name}
              </NavLink>
            </li>
          </ul>
        )
      )}
    </nav>
  );
}

export default NavProps;
