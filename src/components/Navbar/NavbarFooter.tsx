import NavProps from "./NavProps";
import { useTranslation } from "react-i18next";

function NavbarFooter() {
  const { t } = useTranslation();

  return (
    <footer className="navbar-footer-container container">
      <NavProps
        data={t("navFooter", { returnObjects: true }) as []}
        style={{
          /* color: "rgb(242, 242, 242)", */
          backgroundColor: "rgba(32, 0, 15, 1)",
        }}
      />
    </footer>
  );
}

export default NavbarFooter;
