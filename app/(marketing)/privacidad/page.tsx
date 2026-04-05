import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad de CISEC - Consultoría de Inteligencia y Securización SL.",
  alternates: { canonical: "/privacidad" },
  robots: { index: true, follow: true },
};

export default function PrivacidadPage() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: "Política de Privacidad", href: "/privacidad" }]} />
        <h1>Política de Privacidad</h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            Esta página contiene la política de privacidad de CISEC - Consultoría de Inteligencia y Securización SL.
            El contenido se actualizará próximamente con la política completa.
          </p>
          <p>
            <strong className="text-foreground">Responsable del tratamiento:</strong><br />
            CISEC - Consultoría de Inteligencia y Securización SL<br />
            Las Rozas, Madrid<br />
            info@cisec.es
          </p>
          {/* PLACEHOLDER: Replace with full privacy policy content */}
        </div>
      </div>
    </section>
  );
}
