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


  } catch (err: any) {
    if (err) {
      // console.log(err)
      // return "Wrong Credentials";
      // if (err.message.includes("CredentialsSignin")) {

      //   return "Wrong Credentials";
      // }
      if (err?.type?.includes("CredentialsSignin")) {
        return "Wrong Credentials";
      }
    }

    throw err;
  }
};
