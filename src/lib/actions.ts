export const sendContactForm = async (prevState: any, formData: FormData) => {
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
