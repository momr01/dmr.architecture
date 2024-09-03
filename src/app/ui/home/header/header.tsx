"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  logoCompleteBlackBorder,
  logoCompleteWhite,
} from "../../../assets/img/logo/imgLogo";
import styles from "./header.module.css";
import BurgerNav from "./burgerNav/burgerNav";

const navItems = [
  {
    id: 1,
    title: "Sobre mí",
    href: "#about",
  },
  {
    id: 2,
    title: "Proyectos",
    href: "#projects",
  },
  {
    id: 3,
    title: "Servicios",
    href: "#services",
  },
  {
    id: 4,
    title: "Contacto",
    href: "#contact",
  },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${
        scrolled ? styles.headerScrolled : styles.headerTransparent
      }`}
    >
      <Link className={styles.logoLink} href={"/"}>
        <Image
          src={scrolled ? logoCompleteBlackBorder : logoCompleteWhite}
          alt="logo"
          width={120}
        />
      </Link>
      <nav
        className={`${styles.nav} ${
          scrolled ? styles.navBlack : styles.navWhite
        }`}
      >
        <div className={styles.itemsContainer}>
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="hover:underline hover:underline-offset-[10px]"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </nav>
      <div className={styles.burgerNav}>
        <BurgerNav navItems={navItems} scrolled={scrolled} />
      </div>
    </header>
  );
};

export default Header;
