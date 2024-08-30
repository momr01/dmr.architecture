import Image from "next/image";
import Header from "./ui/home/header/header";
import HomeCarousel from "./ui/home/carousel/carousel";
import About from "./ui/home/about/about";
import Projects from "./ui/home/projects/projects";
import Contact from "./ui/home/contact/contact";
import Footer from "./ui/home/footer/footer";
import Services from "./ui/home/services/services";
import ContactBtn from "./components/contactBtn/contactBtn";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <ContactBtn
            positionDiv="fixed"
            positionBtn="end"
            bottom="16"
            x="right-10"
            bg="green-400"
            text="Hablame"
            color="white"
            icon={<FaWhatsapp size={24} className="text-white" />}
          />

          <div className="fixed z-10 bottom-1/2 right-10 bg-gray-800 p-2 rounded-xl cursor-pointer">
            <FaInstagram size={20} className="text-white" />
          </div>

      {/* <div className="fixed z-20 text-green-500 bottom-16 right-10">
        Hablame
      </div> */}
      {/* <div className="fixed z-20 text-orange-500 bottom-1/2 right-10  ">
        INSTA
      </div> */}
      <Header />
      <HomeCarousel />
      <About />
      <Projects />
      <Services />
      <Contact />

      <Footer />
    </>
  );
}
