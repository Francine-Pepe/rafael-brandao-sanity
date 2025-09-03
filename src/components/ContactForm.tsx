import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

function ContactForm() {
  const form = useRef(null);

  const { t } = useTranslation();

  const sendEmail = (e: {
    target: any | HTMLFormElement;
    preventDefault: () => void;
  }) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_h51yjm8",
        "template_ohbxiuj",
        e.target,
        "IKbuix7mIvmtJcvrb"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <main className="contact-form-container">
      <form ref={form} onSubmit={sendEmail} id="contact-form">
        {(t("contactFormData", { returnObjects: true }) as []).map(
          (item: {
            id: string;
            title: string;
            type: string;
            name: string;
            placeholder: string;
          }) => (
            <div className="contact-inputs" key={item.id}>
              <label htmlFor={item.id}>{item.title}</label>
              <input
                type={item.type}
                name={item.name}
                placeholder={item.placeholder}
                required
                min="2"
                id={item.id}
              />
            </div>
          )
        )}

        <div className="contact-label">
          <label htmlFor="message">{t("message")}</label>
          <textarea id="message" name="message" required />
        </div>

        <button className="contact-button" type="submit" value="Send">
          {t("send")}
        </button>
      </form>
    </main>
  );
}

export default ContactForm;
