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
        "service_2q4mln6",
        "template_c3vunb6",
        e.target,
        "user_YeUwC6WQsK1xiMGVBrKzC"
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
      <form ref={form} onSubmit={sendEmail}>
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
              />
            </div>
          )
        )}

        
        <div className="contact-label">
          <label htmlFor="message">{t("message")}</label>
          <textarea id="message" name="message" required />
        </div>

        <button
          className="contact-button"
          type="submit"
          value="Send"
          /* onClick={() =>
            swal({
              text: "Thanks for contacting me! I will get back to you soon! 📧",
              icon: "success",
            })
          } */
        >
          {
            t("send")}
        </button>
      </form>
    </main>
  );
}

export default ContactForm;
