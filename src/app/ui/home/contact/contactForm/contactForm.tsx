"use client";
import {
  Button,
  Checkbox,
  CustomFlowbiteTheme,
  Label,
  Spinner,
  Textarea,
  TextInput,
} from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import styles from "./contactForm.module.css";
import {
  customThemeInput,
  customThemeBtn,
  customThemeTextarea,
} from "./customTheme";
//import Swal from "sweetalert2";
//import 'sweetalert2/dist/sweetalert2.min.css';
//import "sweetalert2/src/sweetalert2.scss";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
//import { connectToDB } from "@/lib/db";
//import { Message } from "@/models/message";
import { sendContactForm } from "@/lib/actions";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const ContactForm = () => {
  //const [loading, setLoading] = useState(false);

  //const [state, formAction] = useFormState(sendContactForm, undefined);

  //console.log(state);
  // Detectar el cambio en el estado de envío
  /* useEffect(() => {
    if (state?.status === "success") {
      Swal.fire({
        icon: "success",
        title: "Formulario enviado",
        text: state.message, // Mensaje retornado
      });
    } else if (state?.status === "error") {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: state.message, // Mensaje retornado en caso de error
      });
    }
  }, [state]);*/ // Escuchar cambios en la respuesta

  // Estados para controlar los inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // Estado para manejar el loading
  const [loading, setLoading] = useState(false);

  // Función para manejar el envío del formulario
  const handleSubmit = async (e: any) => {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario

    setLoading(true); // Activa el estado de "loading"

    //return;
    // Crear el objeto FormData para enviar los datos
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("message", message);

    try {
      // Llamar a la función `sendContactForm` usando `use server`
      const response = await sendContactForm(formData);

      if (response.status === "success") {
        Swal.fire({
          icon: "success",
          title: "Mensaje enviado.",
          // text: response.message,
          text: "Muchas gracias por tu interés. En breve, responderé tu consulta.",
          confirmButtonText: "Volver",
          confirmButtonColor: "gray",
          allowOutsideClick: false,
        });

        // Limpiar los campos del formulario
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");

        //   revalidatePath("/"); //refresh
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        // text: "Hubo un problema al enviar el mensaje. Intenta de nuevo.",
        text: "No fue posible enviar el mensaje. Por favor, intenta nuevamente más tarde.",
        confirmButtonText: "Volver",
        confirmButtonColor: "gray",
        allowOutsideClick: false,
      });
    } finally {
      setLoading(false); // Desactiva el estado de "loading"
    }
  };

  return (
    <div className={styles.container}>
      {/* <form action={formAction} className={styles.form}> */}
      <form onSubmit={handleSubmit} className={styles.form}>
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
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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
          disabled={loading}
          //  className={`${loading}`}
        >
          {/* Enviar */}
          {/* {loading ? "Enviando..." : "Enviar"} */}
          {/* {loading ? <Spinner aria-label="Default status example" size={"md"} /> : "Enviar"} */}
          {loading ? <div>
            <Spinner aria-label="Default status example" size={"md"} />
            <span className="pl-3">Enviando...</span>
          </div>  : "Enviar"}
        </Button>
        <div className="text-center text-red-500 font-bold">
          {/* {state && state} */}
          {/* {state?.status === "error" && state?.status === "error"} */}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

/*

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
      // Swal.fire({
      //   title: "Custom animation with Animate.css",
      //   showClass: {
      //     popup: `
      //       animate__animated
      //       animate__fadeInUp
      //       animate__faster
      //     `,
      //   },
      //   hideClass: {
      //     popup: `
      //       animate__animated
      //       animate__fadeOutDown
      //       animate__faster
      //     `,
      //   },
      // });

      const MySwal = withReactContent(Swal);

      // MySwal.fire({
      //   title: <p>Hello World</p>,
      //   didOpen: () => {
      //     // `MySwal` is a subclass of `Swal` with all the same instance & static methods
      //     MySwal.showLoading()
      //   },
      // }).then(() => {
      //   return MySwal.fire(<p>Shorthand works too</p>)
      // })

      connectToDB();

      const newMsg = new Message({
        name,
        email,
        phone,
        content: message,
      });

      await newMsg.save();

      MySwal.fire({
        title: "Mensaje enviado",
        text: "Muchas gracias por tu interés. En breve, responderé tu consulta.",
        icon: "success",
        confirmButtonText: "Volver",
        confirmButtonColor: "gray",
        allowOutsideClick: false,
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




*/
