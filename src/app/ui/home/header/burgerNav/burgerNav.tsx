"use client";
import { INavItem } from "@/interfaces/inavItem";
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

  const handleRedirect = (path: string) => {
    // Redirige a la página principal con el ID específico
    router.push(`/${path}`);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button onClick={toggleMenu} className="focus:outline-none z-10 px-8">
        <div
          className={`w-8 h-1 ${
            isProjectsPage ? (scrolled ? "bg-white" : "bg-black") : "bg-white"
          } mb-1 transform transition duration-300 ease-in-out ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></div>
        <div
          className={`w-8 h-1 ${
            isProjectsPage ? (scrolled ? "bg-white" : "bg-black") : "bg-white"
          } mb-1 transition duration-300 ease-in-out ${
            isOpen ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`w-8 h-1 ${
            isProjectsPage ? (scrolled ? "bg-white" : "bg-black") : "bg-white"
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
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center justify-center h-full">
          {navItems.map((item) => (
            <li key={item.id} className="mb-10">
              {/* <a 
              href={item.href} 
             
              className="text-black text-xl">
                {item.title}
              </a> */}
              <button
                onClick={() => handleRedirect(item.href)}
                className="text-black text-xl"
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
