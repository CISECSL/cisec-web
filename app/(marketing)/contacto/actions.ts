"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

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

  // Rate limiting
  const ip = "unknown";
  const now = Date.now();
  const limit = rateLimitMap.get(ip);
  if (limit && limit.resetAt > now && limit.count >= 3) {
    return { success: false, error: "Demasiados env\u00edos. Int\u00e9ntalo m\u00e1s tarde." };
  }
  if (!limit || limit.resetAt <= now) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 3600000 });
  } else {
    limit.count++;
  }

  try {
    await resend.emails.send({
      from: "CISEC Web <noreply@cisec.es>",
      to: "info@cisec.es",
      subject: `[Web] Nuevo contacto: ${nombre} - ${empresa}`,
      text: `Nombre: ${nombre}\nEmpresa: ${empresa}\nEmail: ${email}\nServicio: ${servicio || "No especificado"}\nMensaje:\n${mensaje}`,
    });
    return { success: true };
  } catch {
    return { success: false, error: "Error al enviar el mensaje. Cont\u00e1ctanos directamente en info@cisec.es" };
  }
}
