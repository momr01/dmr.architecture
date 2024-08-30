import React from "react";
import { TfiWrite } from "react-icons/tfi";
import { BsCollectionPlayFill } from "react-icons/bs";
import { FaHardHat } from "react-icons/fa";
import styles from "./services.module.css";

const servicesItems = [
  {
    id: 1,
    icon: <TfiWrite size={80} className={styles.icon} />,
    title: "Arquitectura",
    content:
      " Proyecto y Documentación para obras de pequeña y mediana escala.",
  },
  {
    id: 2,
    icon: <BsCollectionPlayFill size={80} className={styles.icon} />,
    title: "Visualización",
    content: " Modelado 3d, renderizado de imágenes y videos de recorrido.",
  },
  {
    id: 3,
    icon: <FaHardHat size={80} className={styles.icon} />,
    title: "Inspección",
    content: "  Supervisión técnica de obra y control de avance.",
  },
];

const Services = () => {
  return (
    <section>
      <h2>Servicios</h2>
      <div className="flex gap-16">
        {servicesItems.map((item) => (
          <div key={item.id} className="w-96 flex gap-8 p-4 shadow-md">
            <div>{item.icon}</div>

            <div>
              <h3 className="uppercase text-xl mb-4 font-bold">{item.title}</h3>
              <p className="leading-9">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
