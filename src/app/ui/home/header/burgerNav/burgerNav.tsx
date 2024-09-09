"use client";
import { logoWhite } from "@/assets/img/logo/imgLogo";
import { INavItem } from "@/interfaces/inavItem";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function BurgerNav({
  navItems,
  isProjectsPage,
  scrolled,
}: {
  navItems: INavItem[];
  isProjectsPage: boolean;
  scrolled: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const router = useRouter();

  // const handleRedirect = async (path: string) => {
  //   // Redirige a la página principal con el ID específico
  //   await router.push(`/${path}`);
  //   setIsOpen(false);
  // };

  const handleRedirect = (path: string) => {
    // const router = useRouter();

    // Inicia la redirección
    router.push(`/${path}`);

    // Cambia el estado justo después de la redirección
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button onClick={toggleMenu} className="focus:outline-none z-10 px-8">
        <div
          className={`w-8 h-1 ${
            isProjectsPage ? "bg-black" : "bg-white"
          } mb-1 transform transition duration-300 ease-in-out ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></div>
        <div
          className={`w-8 h-1 ${
            isProjectsPage ? "bg-black" : "bg-white"
          } mb-1 transition duration-300 ease-in-out ${
            isOpen ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`w-8 h-1 ${
            isProjectsPage ? "bg-black" : "bg-white"
          } transition duration-300 ease-in-out ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
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
              {/* <a 
              href={item.href} 
             
              className="text-black text-xl">
                {item.title}
              </a> */}
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
