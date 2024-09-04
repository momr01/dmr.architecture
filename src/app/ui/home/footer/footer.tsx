import React from "react";
import { CustomFlowbiteTheme, Footer as FooterFBR } from "flowbite-react";
import Image from "next/image";
import {
  logoCompleteBlackBorder,
  logoCompleteWhite,
} from "@/assets/img/logo/imgLogo";
import { customThemeFooter } from "./customTheme";

const Footer = () => {
  return (
    <FooterFBR container className="bg-black" theme={customThemeFooter}>
      <div className="w-full text-center mb-24 lg:mb-10">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          {/* <FooterFBR.Brand
            href="https://flowbite.com"
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Flowbite Logo"
            name="Flowbite"
          /> */}
          <div className="flex w-full justify-center md:justify-start">
            <Image
              src={logoCompleteWhite}
              alt="logo"
              className="w-[100px] md:w-[150px]"
            />
          </div>

          {/* <FooterFBR.LinkGroup>
            <FooterFBR.Link href="#">About</FooterFBR.Link>
            <FooterFBR.Link href="#">Privacy Policy</FooterFBR.Link>
            <FooterFBR.Link href="#">Licensing</FooterFBR.Link>
            <FooterFBR.Link href="#">Contact</FooterFBR.Link>
          </FooterFBR.LinkGroup> */}
        </div>
        <FooterFBR.Divider />

        <FooterFBR.Copyright
          href="#"
          by="- Todos los derechos reservados."
          year={2024}
          className="text-white"
        />
        <FooterFBR.Title title="Desarrollado por MOMR™" className="mt-2" />
      </div>
    </FooterFBR>
  );
};

export default Footer;
