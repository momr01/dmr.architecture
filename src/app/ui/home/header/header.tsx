"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  logoCompleteBlack,
  logoCompleteBlackBorder,
  logoCompleteWhite,
  logoWhite,
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
    if (window.scrollY > 0) {
      setScrolled(true);
    }

    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      // console.log(offset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    //setIsOpen(false);
  };

  return (
    // <header
    //   className={`${styles.header} ${
    //     scrolled ? styles.headerScrolled : styles.headerTransparent
    //   } containerBase`}
    // >
    <header
      className={`${styles.header} ${
        !isProjectsPage
          ? scrolled
            ? styles.headerScrolled
            : styles.headerTransparent
          : styles.headerProjects
      } containerBase`}
    >
      <Link className={styles.logoLink} href={"/"}>
        <Image
          // src={
          //   isProjectsPage
          //     ? scrolled
          //       ? logoCompleteWhite
          //       : logoCompleteBlack
          //     : logoCompleteWhite
          // }
          src={!isProjectsPage ? logoCompleteWhite : logoCompleteBlack}
          alt="logo"
          //width={120}
          width={150}
        />
      </Link>
      {/* <nav
        className={`${styles.nav} ${
          isProjectsPage
            ? scrolled
              ? styles.navWhite
              : styles.navBlack
            : styles.navWhite
        } `}
      > */}
      <nav
        className={`${styles.nav} ${
          !isProjectsPage
            ? scrolled
              ? styles.navWhite
              : styles.navWhite
            : styles.navBlack
        } `}
      >
        <div className={styles.itemsContainer}>
          {navItems.map((item) => (
            // <Link
            //   key={item.id}
            //   href={item.href}
            //   className="hover:underline hover:underline-offset-[10px]"
            // >
            //   {item.title}
            // </Link>
            <button
              key={item.id}
              onClick={() => handleRedirect(item.href)}
              // href={item.href}
              className="hover:underline hover:underline-offset-[10px]"
            >
              {item.title}
            </button>
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
