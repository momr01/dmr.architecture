import React from "react";
import { HiPhone } from "react-icons/hi2";
import { MdMarkEmailRead } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";

const Contact = () => {
  return (
    <section>
      <h2>Contacto</h2>
      <div className="flex justify-around gap-5">
        <div className="flex flex-col gap-10">

          <div className="flex gap-5 items-center">
            <div className="border-2 border-black p-2">
            <HiPhone size={25}  />
            </div>
        
          <span className="font-semibold text-lg">+54 261 6062872</span>
          </div>

          <div className="flex gap-5 items-center">
          <div className="border-2 border-black p-2">
          <MdMarkEmailRead  size={25} />
          </div>
          <span className="font-semibold text-lg">dani_emr27@hotmail.com</span>
          </div>


          <div className="flex gap-5 items-center">
          <div className="border-2 border-black p-2">
          <RiInstagramFill  size={25} />
          </div>
          <span className="font-semibold text-lg">+54 261 6062872</span>
          </div>


         


        </div>

        <div>Formulario</div>
      </div>
    </section>
  );
};

export default Contact;
