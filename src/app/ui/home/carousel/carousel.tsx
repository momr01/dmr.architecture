"use client";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./carousel.module.css";
import {
  imgCarousel1,
  imgCarousel2,
  imgCarousel3,
} from "../../../../assets/img/carousel/imgCarousel";
import { customThemeCarousel } from "./customTheme";

const HomeCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Actualiza el índice activo cuando el slide cambia
  const handleSlideChange = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.container}>
      <Carousel
        slideInterval={4000}
         //slide={false}
        leftControl={" "}
        rightControl={" "}
        theme={customThemeCarousel}
        className={styles.carousel}
        onSlideChange={handleSlideChange}
      >
        <div className={styles.imgContainer}>
          <Image
            src={imgCarousel1}
            alt="Descripción de la imagen"
            layout="fill"
            objectFit="cover"
            // className={`${styles.imgCentered1} ${
            //   activeIndex === 0 ? styles.imgZoomEffect : ""
            // }`}
            className={`${styles.imgCentered1} ${
              activeIndex === 0
                ? styles.imgZoomEffect
                : activeIndex > 0
                ? styles.imgZoomFinal
                : ""
            }`}
            priority={true}
          />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={imgCarousel2}
            alt="Descripción de la imagen"
            layout="fill"
            objectFit="cover"
            // className={styles.imgCentered2}
            className={`${styles.imgCentered2} ${
              activeIndex === 1
                ? styles.imgZoomEffect
                : activeIndex > 1
                ? styles.imgZoomFinal
                : ""
            }`}
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
            className={` ${
              activeIndex === 2
                ? styles.imgZoomEffect
                : activeIndex > 2
                ? styles.imgZoomFinal
                : ""
            }`}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
