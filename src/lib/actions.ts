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
