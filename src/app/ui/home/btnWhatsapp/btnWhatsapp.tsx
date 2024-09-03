import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./btnWhatsapp.module.css";
import Link from "next/link";

const BtnWhatsapp = () => {
  const phoneNumber = "+5492613016290";
  const defaultMessage = "Hola, me gustaría obtener más información.";

  return (
    <div className={styles.container}>
      <Link
        legacyBehavior
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
          defaultMessage
        )}`}
        passHref
      >
        <a target="_blank" rel="noopener noreferrer" className={styles.btn}>
          {" "}
          <div className={styles.textAction}>Hablame</div>
          <div className={styles.iconContainer}>
            <FaWhatsapp className={styles.icon} />
          </div>
          <span className={styles.textContact}>WhatsApp</span>
        </a>
      </Link>
    </div>
  );
};

export default BtnWhatsapp;
