"use client";
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
import Swal from "sweetalert2";
//import "sweetalert2/src/sweetalert2.scss";

const ContactForm = () => {
  const sendContactForm = async (prevState: any, formData: FormData) => {
    const { name, email, phone, message } = Object.fromEntries(formData);

    try {
      console.log(`${name} -  ${email}  - ${phone}  -  ${message}`);
      // await signIn("credentials", { username, password });
      if (
        name.toString().length <= 5 ||
        email.toString().length <= 9 ||
        phone.toString().length < 10 ||
        message.toString().length < 10
      ) {
        return "Por favor, verifique los datos ingresados.";
      }

      // const response = await fetch("/api/send-email", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(formData),
      // });

      // console.log(response);

      // if (response.ok) {
      //   return "Mensaje enviado con éxito";
      // } else {
      //   return "Error al enviar el mensaje";
      // }

      // alert("todo ok");
      Swal.fire({
        title: "Custom animation with Animate.css",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
        },
      });
    } catch (err: any) {
      if (err) {
        // console.log(err)
        // return "Wrong Credentials";
        // if (err.message.includes("CredentialsSignin")) {

        //   return "Wrong Credentials";
        // }

        // if (err?.type?.includes("CredentialsSignin")) {
        //   return "Wrong Credentials";
        // }

        return "Error al enviar el mensaje";
      }

      throw err;
    }
  };

  const [state, formAction] = useFormState(sendContactForm, undefined);

  return (
    <div className={styles.container}>
      <form action={formAction} className={styles.form}>
        <div>
          <div className={styles.labelContainer}>
            <Label htmlFor="name" value="Tu nombre:" className={styles.label} />
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
          <div className={styles.labelContainer}>
            <Label htmlFor="email" value="Tu email:" className={styles.label} />
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
          <div className={styles.labelContainer}>
            <Label
              htmlFor="phone"
              value="Tu teléfono:"
              className={styles.label}
            />
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
          <div className={styles.labelContainer}>
            <Label
              htmlFor="comment"
              value="Tu mensaje:"
              className={styles.label}
            />
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
        <span className="text-end mt-4 text-sm italic text-black font-semibold">
          <span className="text-red-500">*</span> Todos los campos son
          obligatorios.
        </span>
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
