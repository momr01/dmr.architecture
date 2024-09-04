import React from "react";
import { FaInstagram } from "react-icons/fa";
import styles from "./btnInstagram.module.css";
import Link from "next/link";
import { Tooltip } from "flowbite-react";

const BtnInstagram = () => {
  const instagramUrl = "https://www.instagram.com/dmr.arquitectura3d"; // Reemplaza "tu_usuario" con tu nombre de usuario de Instagram

  return (
    // <div className={styles.container}>
    //   <div className={styles.iconContainer}>
    //     <FaInstagram className={styles.icon} />
    //   </div>

    //   <span className={styles.text}>Instagram</span>
    // </div>

    <Link legacyBehavior href={instagramUrl} passHref>
      <a
        target="_blank"
        rel="noopener noreferrer"
        //className="flex items-center gap-2 bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition duration-300"
        className={styles.container}
      >
        {/* <Tooltip
          content="Instagram"
          placement="left"
          className="flex flex-col justify-center"
        > */}
          {" "}
          <div className={styles.iconContainer}>
            <FaInstagram className={styles.icon} />
          </div>
          <span className={styles.text}>Instagram</span>
        {/* </Tooltip> */}
      </a>
    </Link>
  );
};

export default BtnInstagram;
