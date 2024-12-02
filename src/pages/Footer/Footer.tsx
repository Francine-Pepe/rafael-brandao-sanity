import Logo from "../../icons/Logo";
import Copyright from "./Copyright";

function Footer(props: any) {
  const { data } = props;

  return (
    <>
      <footer className="footer-container container">
        <section className="footer-content">
          <Logo />
          <div className="footer-icons">
            {data.map((item: { title: string; icons: any }, index: any) => (
              <div key={index}>
                <h3> {item.title} </h3>
                {item.icons}
              </div>
            ))}
          </div>
        </section>
      </footer>
      <footer>
        <Copyright />
      </footer>
    </>
  );
}

export default Footer;
