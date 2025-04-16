import React from "react";
import ContactForm from "../components/ContactForm";
import PageTitle from "../components/PageTitle";
import { Link } from "react-router-dom";
import RBLogo from "../icons/RBLogo";
import { useTranslation } from "react-i18next";
import BioImage from "../components/BioImage";
import Background from "../assets/Contact-bg.webp";
import Text from "../components/Text";

function Contato() {
  const { t } = useTranslation();

  return (
    <section className="contact-container">
      <PageTitle data={t("nav", { returnObjects: true })} />
      <BioImage image={Background} />

      <div className="contact-content">
        <div className="contact">
          {(t("contactBox", { returnObjects: true }) as []).map(
            (item: {
              id: any;
              text: string;
              link: string;
              linkText: string;
            }) => (
              <div className="contact-text-container" key={item.id}>
                <p>{item.text}</p>
                <Link to={item.link}>{item.linkText}</Link>
              </div>
            )
          )}
        </div>

        {/*         <div className="contact-form">
          <ContactForm />
        </div> */}
      </div>
    </section>
  );
}

export default Contato;
