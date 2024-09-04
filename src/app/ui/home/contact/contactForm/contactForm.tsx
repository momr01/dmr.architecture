"use client";

import { sendContactForm } from "@/lib/actions";
import {
  Button,
  Checkbox,
  CustomFlowbiteTheme,
  Label,
  Textarea,
  TextInput,
} from "flowbite-react";
import React, { useState } from "react";
import { useFormState } from "react-dom";
import styles from "./contactForm.module.css";
import {
  customThemeInput,
  customThemeBtn,
  customThemeTextarea,
} from "./customTheme";

const ContactForm = () => {
  const [state, formAction] = useFormState(sendContactForm, undefined);

  return (
    <div className="xl:w-1/3 mt-20 md:mx-10 lg:mt-0 lg:mx-0 lg:w-[50%]">
      <form action={formAction} className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="name"
              value="Tu nombre:"
              className="font-medium after:content-['*'] after:ml-0.5 after:text-red-500"
            />
          </div>
          {/* <input id="name" type="text" placeholder="Nombre completo" name="name" className="border-2 border-gray-300 p-2 rounded focus:border-yellow-500 !important focus:outline-none transition duration-300 ease-in-out" />
          <span className="font-medium">Mínimo 5 caracteres</span> */}
          <TextInput
            id="name"
            type="text"
            placeholder="Nombre completo"
            name="name"
            theme={customThemeInput}
            color={"base"}
            helperText={
              <>
                <span className={styles.spanText}>Mínimo 5 caracteres</span>
              </>
            }
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Tu email:" />
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="ejemplo@dmr.com"
            //color={"info"}
            //required
            theme={customThemeInput}
            color={"base"}
            name="email"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="phone" value="Tu teléfono:" />
          </div>
          <TextInput
            id="phone"
            type="number"
            placeholder="2617899766"
            //required
            name="phone"
            // className={styles.fiii}
            theme={customThemeInput}
            color="base"
            helperText={
              <>
                <span className={styles.spanText}>
                  Código de área sin 0 + número de celular sin 15
                </span>
              </>
            }
          />
        </div>
        <div className="w-full">
          <div className="mb-2 block">
            <Label htmlFor="comment" value="Tu mensaje:" />
          </div>
          <Textarea
            id="comment"
            placeholder="Agregar un mensaje..."
            //required
            rows={6}
            //className="resize-none"
            theme={customThemeTextarea}
            color="base"
            name="message"
            maxLength={500}
            helperText={
              <>
                <span className={styles.spanText}>Máximo 500 caracteres</span>
              </>
            }
          />
        </div>
        {/* <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" type="password" required />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div> */}
        <span className="text-end mt-4 text-sm italic text-black font-semibold"><span className="text-red-500">*</span> Todos los campos son obligatorios.</span>
        <Button
          type="submit"
          // className="bg-black text-white hover:bg-gray-500 focus:bg-focusRing"
          //className={styles.btn}
          theme={customThemeBtn}
          color={"base"}
        >
          Enviar
        </Button>
        <div className="text-center text-red-500 font-bold">
        {state && state}
        </div>
       
      </form>
    </div>
  );
};

export default ContactForm;
