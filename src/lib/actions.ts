"use server";

import { Message } from "@/models/message";
import { connectToDB } from "./db";

export const sendContactForm = async (formData: FormData) => {
  const { name, email, phone, message } = Object.fromEntries(formData);

  try {
    // Conectarse a la base de datos
    await connectToDB();

    // Crear y guardar un nuevo mensaje
    const newMsg = new Message({
      name,
      email,
      phone,
      content: message,
    });

    await newMsg.save();
    return { status: "success", message: "Mensaje enviado correctamente." };
  } catch (err: any) {
    console.log(err);
    return { status: "error", message: "Error al intentar enviar el mensaje." };
  }
};

export const sendContactForm2 = async (prevState: any, formData: FormData) => {
  const { name, email, phone, message } = Object.fromEntries(formData);

  try {
    await connectToDB();

    const newMsg = new Message({
      name,
      email,
      phone,
      content: message,
    });

    await newMsg.save();

    return {
      status: "success",
      message: "Mensaje enviado correctamente.",
    };
  } catch (err: any) {
    // if (err) {
    //  console.log(err);

    //return "Error al enviar el mensaje";
    //  }
    return {
      status: "error",
      message: "Error al enviar el mensaje. Por favor, intenta nuevamente.",
    };

    throw err;
  }
};

export const sendContactForm3 = async (prevState: any, formData: FormData) => {
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

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    console.log(response);

    if (response.ok) {
      return "Mensaje enviado con éxito";
    } else {
      return "Error al enviar el mensaje";
    }
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
