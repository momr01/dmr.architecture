"use client";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import React from "react";
import styles from "./carousel.module.css";
import {
  imgCarousel1,
  imgCarousel2,
  imgCarousel3,
} from "../../../../assets/img/carousel/imgCarousel";
import { customThemeCarousel } from "./customTheme";

const HomeCarousel = () => {
  return (
    <div className={styles.container}>
      <Carousel
        slideInterval={4000}
        // slide={false}
        leftControl={" "}
        rightControl={" "}
        theme={customThemeCarousel}
        className={styles.carousel}
      >
        <div className={styles.imgContainer}>
          <Image
            src={imgCarousel1}
            alt="Descripción de la imagen"
            layout="fill"
            objectFit="cover"
            className={styles.imgCentered1}
          />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={imgCarousel2}
            alt="Descripción de la imagen"
            layout="fill"
            objectFit="cover"
            className={styles.imgCentered2}
          />
        </div>
        <div
          className={styles.imgContainer}
        >
          <Image
            src={imgCarousel3}
            alt="Descripción de la imagen"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
