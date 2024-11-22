import { NavLink } from "react-router-dom";

function NavProps(props: any) {
  const { data } = props;

  return (
    <nav className="navlinks-props">
      {data.map((item: { name: string; link: string }, index: any) => (
        <ul key={index}>
          <li>
            <NavLink to={item.link}> {item.name} </NavLink>
          </li>
        </ul>
      ))}
    </nav>
  );
}

export default NavProps;
