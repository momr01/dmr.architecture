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
import BtnWhatsapp from "./ui/home/btnWhatsapp/btnWhatsapp";
import BtnInstagram from "./ui/home/btnInstagram/btnInstagram";

export default function Home() {
  return (
    <>
      {/* <ContactBtn
            positionDiv="fixed"
            positionBtn="end"
            bottom="16"
            x="right-10"
            bg="green-400"
            text="Hablame"
            color="white"
            icon={<FaWhatsapp size={24} className="text-white" />}
          
          /> */}

      {/* <div
        className="fixed z-50 lg:z-10 bottom-0 lg:bottom-16 right-0 lg:right-10
      
      w-1/2 lg:w-1/3 flex justify-end"
      >
        <button className="lg:bg-green-400 bg-gray-600 px-5 py-2 lg:rounded-2xl flex flex-col lg:flex-row lg:gap-3 w-full lg:w-auto lg:h-auto h-20">
          <div className="text-white hidden lg:block">Hablame</div>
          <div className="w-full flex justify-center">
          <FaWhatsapp className="text-white text-3xl lg:text-2xl" />
          </div>
         
          <span className="block lg:hidden text-white text-center w-full">
          WhatsApp
        </span>

        </button>
      </div> */}
      <BtnWhatsapp />
      <BtnInstagram />

      {/* <div className="fixed z-50 lg:z-10 w-1/2 lg:w-auto h-20 lg:h-auto bottom-0 lg:bottom-1/2 lg:right-10 bg-gray-600 lg:bg-gray-800 p-2 lg:rounded-xl cursor-pointer">
        <div className="flex justify-center">
          <FaInstagram className="text-white text-3xl lg:text-2xl" />
        </div>

        <span className="block lg:hidden text-white text-center">
          Instagram
        </span>
      </div> */}

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
