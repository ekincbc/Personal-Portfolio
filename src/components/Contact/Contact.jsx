import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.scss";

const Contact = () => {
  const formInput = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_bp6skj5",
      "template_smccf9d",
      e.target,
      "Z-wqRxoDfyGr-uE_6"
    );
    clearInput();
  }

  function clearInput() {
    return formInput.current.reset();
  }

  return (
    <section id="contact" className="contact">
      <h2 className="heading" data-aos="fade-up">
        Contact me
      </h2>
      <form
        className="form"
        data-aos="fade-up"
        ref={formInput}
        onSubmit={sendEmail}
      >
        <input
          type="text"
          name="first-name"
          placeholder="First Name *"
          className="form__input"
        />
        <input
          type="text"
          name="last-name"
          placeholder="Last Name *"
          className="form__input"
        />
        <input
          type="email"
          name="email"
          placeholder="Email *"
          className="form__input"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          className="form__input"
        />
        <label className="form__label">My message *</label>
        <textarea rows="6" name="message" className="form__textarea"></textarea>
        <input type="submit" className="form__button" value="Send my message" />
      </form>
    </section>
  );
};

export default Contact;
