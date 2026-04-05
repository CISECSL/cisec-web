"use client";

import { useActionState, useEffect } from "react";
import { submitContactForm } from "@/app/(marketing)/contacto/actions";
import { trackFormSubmission } from "@/lib/tracking";

const servicios = [
  "Pentesting Web",
  "Pentesting Infraestructura",
  "Auditoría ENS",
  "Respuesta a Incidentes",
  "Otro",
];

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, {
    success: false,
  });

  useEffect(() => {
    if (state.success) {
      trackFormSubmission();
    }
  }, [state.success]);

  if (state.success) {
    return (
      <div className="rounded-xl border border-primary/30 bg-primary/5 p-8 text-center">
        <h3 className="text-xl font-bold text-primary">Mensaje enviado</h3>
        <p className="mt-2 text-muted-foreground">
          Te responderemos en menos de 24 horas.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      <input
        type="text"
        name="website"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div>
        <label htmlFor="nombre" className="mb-1.5 block text-sm font-medium">
          Nombre *
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="Tu nombre"
        />
      </div>

      <div>
        <label htmlFor="empresa" className="mb-1.5 block text-sm font-medium">
          Empresa *
        </label>
        <input
          id="empresa"
          name="empresa"
          type="text"
          required
          className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="Nombre de tu empresa"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="tu@empresa.com"
        />
      </div>

      <div>
        <label htmlFor="servicio" className="mb-1.5 block text-sm font-medium">
          Servicio de interés
        </label>
        <select
          id="servicio"
          name="servicio"
          className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        >
          <option value="">Selecciona un servicio</option>
          {servicios.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="mensaje" className="mb-1.5 block text-sm font-medium">
          Mensaje *
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={5}
          className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="Cuéntanos qué necesitas..."
        />
      </div>

      {state.error && (
        <p className="text-sm text-destructive" role="alert">
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
      >
        {pending ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
}
