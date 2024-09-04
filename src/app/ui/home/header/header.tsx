"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  logoCompleteBlack,
  logoCompleteBlackBorder,
  logoCompleteWhite,
} from "../../../../assets/img/logo/imgLogo";
import styles from "./header.module.css";
import BurgerNav from "./burgerNav/burgerNav";
import { usePathname, useRouter } from "next/navigation";
import { navItems } from "@/data/navItems";

// const navItems = [
//   {
//     id: 1,
//     title: "Sobre mí",
//     href: "#about",
//   },
//   {
//     id: 2,
//     title: "Proyectos",
//     href: "#projects",
//   },
//   {
//     id: 3,
//     title: "Servicios",
//     href: "#services",
//   },
//   {
//     id: 4,
//     title: "Contacto",
//     href: "#contact",
//   },
// ];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isProjectsPage = pathname.includes("proyectos");

  //console.log(pathname);

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
      } containerBase`}
    >
     
        <Link className={styles.logoLink} href={"/"}>
          <Image
            src={
              isProjectsPage
                ? scrolled
                  ? logoCompleteWhite
                  : logoCompleteBlack
                : logoCompleteWhite
            }
            alt="logo"
            width={120}
          />
        </Link>
        <nav
          className={`${styles.nav} ${
            isProjectsPage
              ? scrolled
                ? styles.navWhite
                : styles.navBlack
              : styles.navWhite
          } `}
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
          <BurgerNav
            navItems={navItems}
            isProjectsPage={isProjectsPage}
            scrolled={scrolled}
          />
        </div>
    
    </header>
  );
};

export default Header;
