import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Configura el transporte de Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // tu correo
        pass: process.env.EMAIL_PASS, // tu contraseña o contraseña de aplicación
      },
    });

    // Configura los detalles del correo
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // tu correo para recibir los mensajes
      subject: `Nuevo mensaje de ${name}`,
      text: message,
    };

    try {
      // Enviar el correo
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Correo enviado con éxito' });
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      res.status(500).json({ message: 'Error al enviar el correo' });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
};

export default sendEmail;
