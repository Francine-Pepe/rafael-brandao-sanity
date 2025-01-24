import React from "react";
import ContactForm from "../components/ContactForm";
import PageTitle from "../components/PageTitle";
import { Navigation } from "../data";
import { Link } from "react-router-dom";
import RBLogo from "../icons/RBLogo";

function Contato(props: any) {
  const { data } = props;

  return (
    <section className="contact-container">
      <PageTitle data={Navigation} />
      <div className="contact-content">
        <div className="contact">
          {data.map(
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
          <div className="contact-logo">
            <RBLogo />
          </div>
        </div>

        <div className="contact-form">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contato;
