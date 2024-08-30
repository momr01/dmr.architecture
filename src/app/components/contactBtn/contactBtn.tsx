import React, { ReactNode } from "react";
import { IconType } from "react-icons";
import { FaWhatsapp } from "react-icons/fa";

const ContactBtn = ({
  positionDiv,
  positionBtn,
  bottom,
  x,
  bg,
  text,
  color,
  icon: Icon,
}: {
  positionDiv: string;
  positionBtn: string;
  bottom: string;
  x: string;
  bg: string;
  text: string;
  color: string;
  icon: ReactNode;
}) => {
  return (
    <div
      className={`${positionDiv} z-10 bottom-${bottom} ${x}
      
      w-1/3 flex justify-${positionBtn}`}
    >
      <button className={`bg-${bg} px-5 py-2 rounded-2xl flex gap-3`}>
        <div className={`text-${color}`}>{text}</div>
        {Icon}
      </button>
    </div>
  );
};

export default ContactBtn;
