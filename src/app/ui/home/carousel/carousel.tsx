"use client";
import { Carousel, CustomFlowbiteTheme } from "flowbite-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./carousel.module.css";
import {
  imgCarousel1,
  imgCarousel2,
  imgCarousel3,
} from "../../../../assets/img/carousel/imgCarousel";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { useSpring, animated } from "@react-spring/web";
import { customThemeCarousel } from "./customTheme";
import BtnWhatsapp from "../btnWhatsapp/btnWhatsapp";
import BtnInstagram from "../btnInstagram/btnInstagram";

const HomeCarousel = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const slideUp = useSpring({
    transform: isMounted ? "translateY(0%)" : "translateY(100%)",
    opacity: isMounted ? 1 : 0,
    // config: { tension: 200, friction: 20 },
    config: { tension: 50, friction: 20 },
    //loop: { reverse: true },
  });

  const titleBgShow = useSpring({
    // transform: isMounted ? "translateY(0%)" : "translateY(100%)",
    opacity: isMounted ? 1 : 0,
    // config: { tension: 200, friction: 20 },
    config: { tension: 50, friction: 20 },
    loop: { reverse: true },
  });

  const phoneNumber = "+5492613016290";
  const defaultMessage = "Hola, me gustaría obtener más información.";

  return (
    <div className={styles.container}>
      {/* <animated.div
        style={slideUp}
        className="absolute z-10 top-1/4 lg:top-1/2 lg:left-1/3 p-11 w-full lg:w-auto
        lg:bg-black lg:bg-opacity-60 "
      >
        <div
      
        >

          

          <h2
            className="text-white font-bold text-[40px] tracking-wider lg:text-[70px] lg:font-normal mb-0"
         
          >
            Bienvenidos
          </h2>
        </div>
      </animated.div> */}

      <div className="absolute z-[70] w-full h-full flex justify-center items-center">
        <BtnWhatsapp />
        <BtnInstagram />
        <animated.div
          style={slideUp}
        
          className="p-11 lg:bg-black lg:bg-opacity-60 relative bottom-44 lg:bottom-20 xl:bottom-0"
        >
          <h2 className="z-[70] text-white font-bold text-[40px] tracking-wider md:text-[50px] lg:text-[60px] lg:font-normal 2xl:text-[100px] mb-0">
            Bienvenidos 
          </h2>
        </animated.div>
        </div>

        {/* <animated.div
        style={slideUp}
        className="absolute z-10 top-1/4 lg:top-1/2 lg:left-1/3 p-11 w-full lg:w-auto
        lg:bg-black lg:bg-opacity-60 "
      >
        <div>
          <h2 className="text-white font-bold text-[40px] tracking-wider lg:text-[70px] lg:font-normal mb-0">
            Bienvenidos
          </h2>
        </div>
      </animated.div> */}
     

      <div className="absolute z-[100] bottom-40 lg:bottom-20 left-1/3 w-1/3 flex justify-center">
        <Link
          legacyBehavior
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            defaultMessage
          )}`}
          passHref
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white px-5 py-2 rounded-2xl flex gap-3 hover:bg-gray-600 transition duration-300 group"
          >
            {" "}
            <div className="text-black group-hover:text-white">Contactame</div>
            <FaWhatsapp
              size={24}
              className="text-green-500 group-hover:text-white"
            />
          </a>
        </Link>
      </div>

      <Carousel
        slideInterval={4000}
        //slide={false}
        leftControl={" "}
        rightControl={" "}
        theme={customThemeCarousel}
        className="z-[60]"
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          {/* <animated.div
            style={slideUp}
            className="absolute z-10 top-1/3 lg:top-1/2 lg:left-1/3 p-11 w-full lg:w-1/3"
          >
            <div
            //className="bg-gray-800 bg-opacity-70"
            >
              <h2
                className="text-white lg:text-[70px]"
                style={{ fontFamily: "CodecProBold, sans-serif" }}
              >
                Bienvenidos
              </h2>
            </div>
          </animated.div> */}

          {/* <div className="absolute z-10 bottom-20 left-1/3 w-1/3 flex justify-center">
        <div className="bg-white px-5 py-2 rounded-2xl flex gap-3">
        <button>Contactame</button>
        <FaWhatsapp size={24} className="text-green-400" />
        </div>
       

        </div> */}

          {/* <ContactBtn
            positionDiv="absolute"
            positionBtn="center"
            bottom="20"
            x="left-1/3"
            bg="white"
            text="Contactame"
            color="black"
            icon={<FaWhatsapp size={24} className="text-green-400" />}
          /> */}

          {/* <div className="absolute z-10 bottom-32 lg:bottom-20 left-1/3 w-1/3 flex justify-center">
            <button className="bg-white px-5 py-2 rounded-2xl flex gap-3">
              <div className="text-black">Contactame</div>
              <FaWhatsapp size={24} className="text-green-400" />
            </button>
          </div> */}

          {/* <div className="absolute z-10 bottom-32 lg:bottom-20 left-1/3 w-1/3 flex justify-center">
            <Link
              legacyBehavior
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                defaultMessage
              )}`}
              passHref
             
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white px-5 py-2 rounded-2xl flex gap-3 hover:bg-gray-600 transition duration-300 group"
              >
                {" "}
                <div className="text-black group-hover:text-white">
                  Contactame
                </div>
                <FaWhatsapp size={24} className="text-green-500 group-hover:text-white" />
              </a>
            </Link>

          
          </div> */}

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
