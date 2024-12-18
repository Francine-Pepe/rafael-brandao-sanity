import Logo from "../../icons/Logo";
import Copyright from "./Copyright";

function Footer(props: any) {
  const { data } = props;

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
