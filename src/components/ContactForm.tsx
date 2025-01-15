import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ContactFormData } from "../data";

function ContactForm() {
  const form = useRef(null);

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
    <main className="contact-form-container container">
      <form ref={form} onSubmit={sendEmail}>
        {ContactFormData.map(
          ({ id, title, htmlFor, name, type, placeholder }) => {
            return (
              <div className="contact-inputs">
                <label htmlFor={htmlFor}>{title}</label>
                <input
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  required
                  min="2"
                />
              </div>
            );
          }
        )}
        <div className="contact-label">
          <label htmlFor="message">Mensagem:</label>
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
          Enviar
        </button>
      </form>
    </main>
  );
}

export default ContactForm;
