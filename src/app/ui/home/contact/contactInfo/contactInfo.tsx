import React from "react";
import { HiPhone } from "react-icons/hi2";
import { MdMarkEmailRead } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import styles from "./contactInfo.module.css";

const contactItems = [
  {
    id: 1,
    icon: <HiPhone size={25} />,
    content: "+54 261 6062872",
  },
  {
    id: 2,
    icon: <MdMarkEmailRead size={25} />,
    content: "dani_emr27@hotmail.com",
  },
  {
    id: 3,
    icon: <RiInstagramFill size={25} />,
    content: "+54 261 6062872",
  },
];

const ContactInfo = () => {
  return (
    <div className="flex flex-col">
      <div className="mb-20">
        <h3 className="text-3xl mb-2">Hablemos</h3>
        <p className="text-lg">Enviame tu consulta:</p>
      </div>

      <div className={styles.container}>
        {contactItems.map((contact) => (
          <div key={contact.id} className={styles.contactContainer}>
            <div className={styles.iconContainer}>{contact.icon}</div>

            <span className={styles.text}>{contact.content}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
