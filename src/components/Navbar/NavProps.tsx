import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

function NavProps(props: any) {
  const { data, style } = props;
  const homeUrl = useLocation().pathname;

  return (
    <nav className="navlinks-props">
      {data.map((item: { name: string; link: string }, index: any) => (
        <ul key={index}>
          <li>
            <NavLink
              to={item.link}
              style={{
                color: `${homeUrl === "/" ? "#F2F2F2" : "rgba(32, 0, 15, 1)"}`,
              }}
            >
              {item.name}
            </NavLink>
          </li>
        </ul>
      ))}
    </nav>
  );
}

export default NavProps;
