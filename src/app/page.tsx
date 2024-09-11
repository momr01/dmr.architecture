"use client";

import HomeCarousel from "./ui/home/carousel/carousel";
import About from "./ui/home/about/about";
import Projects from "./ui/home/projects/projects";
import Contact from "./ui/home/contact/contact";
import Services from "./ui/home/services/services";
import BtnWhatsapp from "./ui/home/btnWhatsapp/btnWhatsapp";
import BtnInstagram from "./ui/home/btnInstagram/btnInstagram";

export default function Home() {

  return (
    <>
      <BtnWhatsapp />
      <BtnInstagram />
      <HomeCarousel />
      <About />
      <Projects />
      <Services />
      <Contact />
    </>
  );
}
