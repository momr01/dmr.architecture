"use client";
import { NavItem } from "@/app/interfaces/navItem";
import React, { useState } from "react";

function BurgerNav({navItems, scrolled}: { navItems: NavItem[]; scrolled: boolean}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button onClick={toggleMenu} className="focus:outline-none z-10 px-8">
        <div
          className={`w-8 h-1 ${scrolled ? 'bg-black' : 'bg-gray-300'} mb-1 transform transition duration-300 ease-in-out ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></div>
        <div
          className={`w-8 h-1 ${scrolled ? 'bg-black' : 'bg-gray-300'} mb-1 transition duration-300 ease-in-out ${
            isOpen ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`w-8 h-1 ${scrolled ? 'bg-black' : 'bg-gray-300'} transition duration-300 ease-in-out ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></div>
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-gray-600 shadow-lg transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center justify-center h-full">
          {navItems.map((item) => (
            <li key={item.id} className="mb-4">
              <a href="#" className="text-black text-xl">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BurgerNav;
