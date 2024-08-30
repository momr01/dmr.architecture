import Image from "next/image";
import React from "react";
import styles from "./cardProject.module.css";
import { imgCarousel3 } from "@/app/assets/img/carousel/imgCarousel";

const CardProject = ({ el }: { el: number }) => {
  return (
    <div
      className={styles.cardContainer}
    >
      <div className={styles.blackBg}></div>
      <Image
        src={imgCarousel3}
        alt="img"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className={styles.img}
      />
      <h3 className="absolute z-40 text-white text-2xl">PROYECTO {el}</h3>
    </div>
  );
};

export default CardProject;
