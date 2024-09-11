import React from "react";
import { FaInstagram } from "react-icons/fa";
import styles from "./btnInstagram.module.css";
import Link from "next/link";

const BtnInstagram = () => {
  const instagramUrl = "https://www.instagram.com/dmr.arquitectura3d"; // Reemplaza "tu_usuario" con tu nombre de usuario de Instagram

  return (
    <Link legacyBehavior href={instagramUrl} passHref>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className={styles.container}
      >
          <div className={styles.iconContainer}>
            <FaInstagram className={styles.icon} />
          </div>
          <span className={styles.text}>Instagram</span>
      </a>
    </Link>
  );
};

export default BtnInstagram;
