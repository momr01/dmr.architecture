import React from "react";
import { Footer as FooterFBR } from "flowbite-react";
import Image from "next/image";
import { logoCompleteBlackBorder } from "@/app/assets/img/logo/imgLogo";

const Footer = () => {
  return (
    <FooterFBR container className="bg-primary">
      <div className="w-full text-center mb-24 lg:mb-10">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          {/* <FooterFBR.Brand
            href="https://flowbite.com"
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Flowbite Logo"
            name="Flowbite"
          /> */}
          <Image src={logoCompleteBlackBorder} alt="logo" width={150} />
          {/* <FooterFBR.LinkGroup>
            <FooterFBR.Link href="#">About</FooterFBR.Link>
            <FooterFBR.Link href="#">Privacy Policy</FooterFBR.Link>
            <FooterFBR.Link href="#">Licensing</FooterFBR.Link>
            <FooterFBR.Link href="#">Contact</FooterFBR.Link>
          </FooterFBR.LinkGroup> */}
        </div>
        <FooterFBR.Divider />
        <FooterFBR.Copyright href="#" by="MOMR™" year={2024} />
      </div>
    </FooterFBR>
  );
};

export default Footer;
