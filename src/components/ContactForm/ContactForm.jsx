import React from "react";
import "./ContactForm.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";

const ContactForm = () => {
  return (
    <section className="container">
      <div className="contact-form">
        <div className="top-button">
          <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize={24} />} />
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize={24} />} />
        </div>
        <form>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
        </form>
      </div>

      <div className="contact-images"></div>
    </section>
  );
};

export default ContactForm;
