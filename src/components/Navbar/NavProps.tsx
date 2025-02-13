import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

function NavProps(props: any) {
  const { data, style } = props;
  const homeUrl = useLocation().pathname;

  const {t} = useTranslation()



  return (
    <nav className="navlinks-props">
    {(t('nav',  {returnObjects: true} ) as []).map((item: { name: string, link: string}, index: any) => (
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
