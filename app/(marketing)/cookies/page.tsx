import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "Política de cookies de CISEC - Consultoría de Inteligencia y Securización SL.",
  alternates: { canonical: "/cookies" },
  robots: { index: true, follow: true },
};

export default function CookiesPage() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: "Política de Cookies", href: "/cookies" }]} />
        <h1>Política de Cookies</h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            Esta página contiene la política de cookies de CISEC - Consultoría de Inteligencia y Securización SL.
            El contenido se actualizará próximamente con la política completa.
          </p>

          <h2 className="text-foreground">¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web.
            Nos permiten analizar el uso del sitio para mejorar nuestros servicios.
          </p>

          <h2 className="text-foreground">Cookies que utilizamos</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-foreground">Cookies técnicas:</strong> Necesarias para el funcionamiento del sitio. No requieren consentimiento.</li>
            <li><strong className="text-foreground">Cookies analíticas (Google Analytics):</strong> Nos ayudan a entender cómo se usa el sitio. Requieren consentimiento.</li>
            <li><strong className="text-foreground">Cookies de marketing (Google Ads):</strong> Permiten medir la efectividad de las campañas publicitarias. Requieren consentimiento.</li>
          </ul>

          <h2 className="text-foreground">Gestión de cookies</h2>
          <p>
            Puedes aceptar o rechazar las cookies mediante el banner que aparece al visitar el sitio por primera vez.
            También puedes configurar tu navegador para bloquear o eliminar cookies.
          </p>

          {/* PLACEHOLDER: Replace with full cookie policy content */}
        </div>
      </div>
    </section>
  );
}
