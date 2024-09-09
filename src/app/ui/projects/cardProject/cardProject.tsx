"use client";

import Image from "next/image";
import React, { useState } from "react";
import styles from "./cardProject.module.css";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { IProject } from "@/interfaces/iproject";
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
import { usePathname } from "next/navigation";

const CardProject = ({ el, delay }: { el: IProject; delay: number }) => {
  const pathname = usePathname();
  const isProjectsPage = pathname.includes("proyectos");

  const [open, setOpen] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true, // Solo dispara la animación una vez
    threshold: 0.05, // El porcentaje del elemento visible para activar la animación
  });

  // Define un retraso basado en el índice del elemento
  //const delay = index * 500; // 200 ms por cada índice
  // const delay = 200;

  // Usa useSpring para definir la animación
  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(20px)",
    config: { tension: 50, friction: 20 },
    delay,
  });

  // Divide el texto en palabras
  const words = el.title.split(" ");

  // Asegúrate de que hay al menos dos palabras
  const firstPart = words.slice(0, 1).join(" ");
  const secondPart = words.slice(1).join(" ");

  return (
    <>
      <animated.div
        className={`${styles.cardContainer} ${
          isProjectsPage
            ? styles.cardContainerWhite
            : styles.cardContainerPrimary
        }`}
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
          {/* {el.title} */}

          {/* Las dos primeras palabras */}
          <span>{firstPart}</span>
          {/* Salto de línea */}
          <br />
          {/* El resto del texto */}
          <span>{secondPart}</span>
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
