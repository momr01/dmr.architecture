import React from "react";
import ContactInfo from "./contactInfo/contactInfo";
import ContactForm from "./contactForm/contactForm";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contacto</h2>
      <div className={styles.partsContainer}>
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
