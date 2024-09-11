"use client";
import { Button, Label, Spinner, Textarea, TextInput } from "flowbite-react";
import React, { useState } from "react";
import styles from "./contactForm.module.css";
import {
  customThemeInput,
  customThemeBtn,
  customThemeTextarea,
} from "./customTheme";
import Swal from "sweetalert2";
import { sendContactForm } from "@/lib/actions";

const ContactForm = () => {
  // Estado para manejar el loading
  const [loading, setLoading] = useState(false);
  // Estados para inputs y errores
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Manejador de cambios en los inputs
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Validar el campo mientras el usuario escribe
    setErrors({
      ...errors,
      [name]: validate(name, value),
    });
  };

  // Validar todo el formulario antes de enviar
  const validateForm = () => {
    const newErrors = {
      name: validate("name", formData.name),
      email: validate("email", formData.email),
      phone: validate("phone", formData.phone),
      message: validate("message", formData.message),
    };

    setErrors(newErrors);

    return !Object.values(newErrors).some((error) => error);
  };

  // Validar cada campo
  const validate = (name: string, value: string) => {
    switch (name) {
      case "name":
        if (!value) return "El nombre es obligatorio.";
        else if (value.length <= 5)
          return "El nombre debe tener al menos 6 caracteres.";
        return "";
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) return "El email es obligatorio.";
        else if (!emailRegex.test(value)) return "Email inválido.";
        else if (value.length < 10) return "Email inválido.";
        return "";
      case "phone":
        const phoneRegex = /^[0-9]{10}$/; // Número de teléfono de 10 dígitos
        if (!value) return "El teléfono es obligatorio.";
        else if (!phoneRegex.test(value))
          return "Código de área sin 0 + número de celular sin 15.";
        return "";
      case "message":
        if (!value) return "El mensaje es obligatorio.";
        else if (value.length < 10 || value.length > 500)
          return "El mensaje debe tener al menos 10 caracteres y cómo máximo 500 caracteres.";
        return "";
      default:
        return "";
    }
  };

  // Manejador del submit
  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (validateForm()) {
      // Si el formulario es válido, enviar los datos
      sendVerifyData();
    }
  };

  const sendVerifyData = async () => {
    setLoading(true); // Activa el estado de "loading"

    // Crear el objeto FormData para enviar los datos
    const formDataNew = new FormData();
    formDataNew.append("name", formData.name);
    formDataNew.append("email", formData.email);
    formDataNew.append("phone", formData.phone);
    formDataNew.append("message", formData.message);

    try {
      // Llamar a la función `sendContactForm` usando `use server`
      const response = await sendContactForm(formDataNew);

      if (response.status === "success") {
        Swal.fire({
          icon: "success",
          title: "Mensaje enviado.",
          text: "Muchas gracias por tu interés. En breve, responderé tu consulta.",
          confirmButtonText: "Volver",
          confirmButtonColor: "gray",
          allowOutsideClick: false,
        });

        // Limpiar los campos del formulario
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
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
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <div className={styles.labelContainer}>
            <Label htmlFor="name" value="Tu nombre:" className={styles.label} />
          </div>
          <TextInput
            id="name"
            type="text"
            placeholder="Nombre completo"
            name="name"
            theme={customThemeInput}
            color={errors.name ? "failure" : "base"}
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.name && <p className={styles.errorText}>{errors.name}</p>}
        </div>
        <div>
          <div className={styles.labelContainer}>
            <Label htmlFor="email" value="Tu email:" className={styles.label} />
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="ejemplo@dmr.com"
            theme={customThemeInput}
            color={errors.email ? "failure" : "base"}
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <p className={styles.errorText}>{errors.email}</p>}
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
            name="phone"
            theme={customThemeInput}
            color={errors.phone ? "failure" : "base"}
            value={formData.phone}
            onChange={handleInputChange}
          />
          {errors.phone && <p className={styles.errorText}>{errors.phone}</p>}
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
            rows={6}
            theme={customThemeTextarea}
            color={errors.message ? "failure" : "base"}
            name="message"
            maxLength={500}
            value={formData.message}
            onChange={handleInputChange}
          />
          {errors.message && (
            <p className={styles.errorText}>{errors.message}</p>
          )}
        </div>
        <span className={styles.mandatoryText}>
          <span className={styles.mandatoryStar}>*</span> Todos los campos son
          obligatorios.
        </span>
        <Button
          type="submit"
          theme={customThemeBtn}
          color={"base"}
          disabled={loading}
        >
          {loading ? (
            <div>
              <Spinner aria-label="Default status" size={"md"} />
              <span className={styles.spinnerText}>Enviando...</span>
            </div>
          ) : (
            "Enviar"
          )}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
