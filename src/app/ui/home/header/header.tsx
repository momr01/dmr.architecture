import Link from "next/link";
import React from "react";
import Image from "next/image";
import { logoCompleteWhite } from "../../../assets/img/logo/imgLogo";
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
    href: "/",
  },
  {
    id: 4,
    title: "Contacto",
    href: "/",
  },
];

const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.logoLink} href={"/"}>
        <Image src={logoCompleteWhite} alt="logo" width={100} />
      </Link>
      <nav className={styles.nav}>
        <div className={styles.itemsContainer}>
          {navItems.map((item) => (
            <Link key={item.id} href={item.href}>
              {item.title}
            </Link>
          ))}
        </div>
      </nav>
      <div className={styles.burgerNav}>
        <BurgerNav navItems={navItems} />
      </div>
    </header>
  );
};

export default Header;
