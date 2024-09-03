"use client";

import { sendContactForm } from "@/app/lib/actions";
import { Button, Checkbox, Label, Textarea, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { useFormState } from "react-dom";

const ContactForm = () => {
  
  const [state, formAction] = useFormState(sendContactForm, undefined);

  return (
    <div className="lg:w-1/3 mt-20 lg:mt-0">
      <form action={formAction} className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Tu nombre:" />
          </div>
          <TextInput
            id="name"
            type="text"
            placeholder="Nombre completo"
            //required
            name="name"
            // color={'success'}
            helperText={
              <>
                <span className="font-medium">Mínimo 5 caracteres</span>
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
            //required
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
            helperText={
              <>
                <span className="font-medium">
                  Código de área sin 0 + número de celular sin 15
                </span>
              </>
            }
          />
        </div>
        <div className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="comment" value="Tu mensaje:" />
          </div>
          <Textarea
            id="comment"
            placeholder="Agregar un mensaje..."
            //required
            rows={6}
            className="resize-none"
            name="message"
            maxLength={500}
            helperText={
              <>
                <span className="font-medium">Máximo 500 caracteres</span>
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
        <Button type="submit" className="bg-primary text-black">Enviar</Button>
        {state && state}
      </form>
    </div>
  );
};

export default ContactForm;
