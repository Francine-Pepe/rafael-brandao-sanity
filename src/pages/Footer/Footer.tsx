import NavbarFooter from "../../components/Navbar/NavbarFooter";
import Logo from "../../icons/Logo";
import Copyright from "./Copyright";
import { useTranslation } from "react-i18next";

function Footer(props: any) {
  const { data } = props;
  const { t } = useTranslation();

  return (
    <>
      <footer className="footer-container container" id="footer">
        <section className="footer-content">
          <Logo
            style={{
              filter:
                "brightness(0) saturate(100%) invert(99%) sepia(0%) saturate(54%) hue-rotate(174deg) brightness(113%) contrast(90%)",
            }}
          />
            <div className="footer-icons">
            {(t("footerContact", { returnObjects: true }) as []).map(
              (item: { title: string }, index: number) => (
              <div key={index}>
                <h3>{item.title}</h3>
                {data[index]?.icons}
              </div>
              )
            )}
            </div>
        </section>
      </footer>
      <footer>
        <Copyright />
        <NavbarFooter />
      </footer>
    </>
  );
}

export default Footer;
