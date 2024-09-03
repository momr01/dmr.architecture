"use client";

import Image from "next/image";
import React, { useState } from "react";
import styles from "./cardProject.module.css";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { Project } from "@/app/interfaces/project";
import Lightbox from "yet-another-react-lightbox";
import {
  Slideshow,
  Thumbnails,
  Captions,
  Counter,
  Zoom,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const CardProject = ({ el, index }: { el: Project; index: number }) => {
  const [open, setOpen] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true, // Solo dispara la animación una vez
    threshold: 0.2, // El porcentaje del elemento visible para activar la animación
  });

  // Define un retraso basado en el índice del elemento
  const delay = index * 500; // 200 ms por cada índice

  // Usa useSpring para definir la animación
  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(20px)",
    config: { tension: 50, friction: 20 },
    delay,
  });

  return (
    <>
      <animated.div
        className={styles.cardContainer}
        ref={ref}
        style={props}
        onClick={() => setOpen(true)}
      >
        <div className={styles.blackBg}></div>
        <Image
          src={el.images[0]}
          alt="img"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className={styles.img}
        />
        <h3 className="absolute z-40 text-white text-2xl text-center uppercase px-10 font-semibold tracking-wider">
          {el.title}
        </h3>
      </animated.div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={el.images}
        plugins={[Counter, Slideshow, Thumbnails, Zoom]}
      />
    </>
  );
};

export default CardProject;
