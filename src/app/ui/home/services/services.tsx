import React from "react";
import { TfiWrite } from "react-icons/tfi";
import { BsCollectionPlayFill } from "react-icons/bs";
import { FaHardHat } from "react-icons/fa";
import styles from "./services.module.css";
import {
  logoArquitectura,
  logoIngenieria,
  logoVisualizacion,
} from "@/assets/img/services/imgServices";
import Image from "next/image";

const servicesItems = [
  {
    id: 1,
    //icon: <TfiWrite size={80} className={styles.icon} />,
    icon: logoArquitectura,
    title: "Arquitectura",
    content:
      "Proyectos y Documentación técnica para obras públicas y privadas.",
  },
  {
    id: 2,
    //icon: <BsCollectionPlayFill size={80} className={styles.icon} />,
    icon: logoIngenieria,
    title: "Ingeniería",
    content: "Cálculo estructural, proyectos sanitarios y eléctricos.",
  },
  {
    id: 3,
    //icon: <FaHardHat size={80} className={styles.icon} />,
    icon: logoVisualizacion,
    title: "Visualización",
    content: "Diseño, Modelado 3D y renderizado de imágenes.",
  },
];

const Services = () => {
  return (
    <section id="services">
      <h2>Servicios</h2>
      <div className="flex gap-16 flex-col lg:flex-row lg:justify-center lg:gap-5 border-t-4 border-primary pt-14">
        {servicesItems.map((item) => (
          <div key={item.id} className="lg:w-96 flex gap-8 p-4 shadow-md lg:gap-2 bg-gray-200 rounded-lg">
            {/* <div>{item.icon}</div> */}
            <div>
              <Image src={item.icon} alt={item.title.toLowerCase()} 
             // width={300} 
              className="w-[150px] lg:w-[300px]"  />
            </div>

            <div>
              <h3 className="uppercase text-xl mb-4 font-bold lg:mb-2">{item.title}</h3>
              <p className="leading-9">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
