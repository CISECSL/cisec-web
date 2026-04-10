"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormState {
  success: boolean;
  error?: string;
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  if (formData.get("website")) return { success: true }; // Honeypot

  const nombre = formData.get("nombre")?.toString().trim();
  const empresa = formData.get("empresa")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const servicio = formData.get("servicio")?.toString().trim();
  const mensaje = formData.get("mensaje")?.toString().trim();

  if (!nombre || !empresa || !email || !mensaje) {
    return { success: false, error: "Todos los campos son obligatorios." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: "Email no v\u00e1lido." };
  }

  try {
    const result = await resend.emails.send({
      from: "CISEC Web <noreply@cisec.es>",
      to: "amorales@cisec.es",
      subject: `[Web] Nuevo contacto: ${nombre} - ${empresa}`,
      text: `Nombre: ${nombre}\nEmpresa: ${empresa}\nEmail: ${email}\nServicio: ${servicio || "No especificado"}\nMensaje:\n${mensaje}`,
    });

    if (result.error) {
      console.error("Resend error:", result.error);
      return { success: false, error: `Error al enviar: ${result.error.message}` };
    }

    return { success: true };
  } catch (error) {
    console.error("Error enviando email:", error);
    return { success: false, error: "Error al enviar el mensaje. Contáctanos directamente en amorales@cisec.es" };
  }
}
