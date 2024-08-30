import { Carousel } from "flowbite-react";
import Image from "next/image";
import React from "react";
import styles from "./carousel.module.css";
import {
  imgCarousel1,
  imgCarousel2,
  imgCarousel3,
} from "../../../assets/img/carousel/imgCarousel";
import { FaWhatsapp } from "react-icons/fa";
import ContactBtn from "@/app/components/contactBtn/contactBtn";

const HomeCarousel = () => {
  return (
    <div className={styles.container}>
      <Carousel
        slideInterval={2000}
        slide={false}
        leftControl={" "}
        rightControl={" "}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <div className="absolute z-10 top-1/2 left-1/3 bg-gray-800 p-11 bg-opacity-40 w-1/3">
            <h2 className="text-white text-4xl text-center">Bienvenidos</h2>
          </div>
          {/* <div className="absolute z-10 bottom-20 left-1/3 w-1/3 flex justify-center">
        <div className="bg-white px-5 py-2 rounded-2xl flex gap-3">
        <button>Contactame</button>
        <FaWhatsapp size={24} className="text-green-400" />
        </div>
       

        </div> */}

          <ContactBtn
            positionDiv="absolute"
            positionBtn="center"
            bottom="20"
            x="left-1/3"
            bg="white"
            text="Contactame"
            color="black"
            icon={<FaWhatsapp size={24} className="text-green-400" />}
          />

          <Image
            src={imgCarousel1}
            alt="Descripción de la imagen"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <Image
            src={imgCarousel2}
            alt="Descripción de la imagen"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100vh",
            overflow: "hidden",
          }}
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
