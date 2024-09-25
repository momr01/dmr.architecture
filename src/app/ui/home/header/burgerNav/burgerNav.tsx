"use client";
import { logoWhite } from "@/assets/img/logo/imgLogo";
import { INavItem } from "@/interfaces/inavItem";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from "./burgerNav.module.css";

function BurgerNav({
  navItems,
  isProjectsPage,
}: {
  navItems: INavItem[];
  isProjectsPage: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleRedirect = (path: string) => {
    // Inicia la redirección
    router.push(`/${path}`);

    // Cambia el estado justo después de la redirección
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <button onClick={toggleMenu} className={styles.burgerBtn}>
        <div
          className={`${styles.burgerBtnLineTransform} ${
            isProjectsPage
              ? styles.burgerBtnLineBlack
              : styles.burgerBtnLineWhite
          }  ${isOpen ? "rotate-45 translate-y-2" : ""}`}
        ></div>
        <div
          className={`${styles.burgerBtnLineMb} ${
            isProjectsPage
              ? styles.burgerBtnLineBlack
              : styles.burgerBtnLineWhite
          }  ${isOpen ? "opacity-0" : ""}`}
        ></div>
        <div
          className={`${styles.burgerBtnLines} ${
            isProjectsPage
              ? styles.burgerBtnLineBlack
              : styles.burgerBtnLineWhite
          }  ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
        ></div>
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-gray-600 bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-black shadow-lg transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="w-[60%] mx-auto py-10">
          <Image src={logoWhite} alt="logo" />
        </div>

        <ul className="flex flex-col items-center justify-start h-full mt-24">
          {navItems.map((item) => (
            <li key={item.id} className="mb-10">
              <button
                onClick={() => handleRedirect(item.href)}
                className="text-white text-xl"
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BurgerNav;
