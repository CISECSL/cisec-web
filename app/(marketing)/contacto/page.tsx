import type { Metadata } from "next";
import { Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import { localBusinessSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ContactForm } from "@/components/forms/ContactForm";
import { FadeContent } from "@/components/ui/FadeContent";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta con CISEC para una consulta gratuita sobre pentesting, auditoría de seguridad o cumplimiento normativo. Respuesta en menos de 24 horas.",
  alternates: { canonical: "/contacto" },
  openGraph: {
    title: "Contacto | CISEC Ciberseguridad",
    description:
      "Contacta con CISEC para una consulta gratuita sobre pentesting y ciberseguridad.",
    url: "https://cisec.es/contacto",
    siteName: "CISEC Ciberseguridad",
    locale: "es_ES",
    type: "website",
  },
};

const breadcrumbItems = [{ name: "Contacto", href: "/contacto" }];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@cisec.es",
    href: "mailto:info@cisec.es",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Las Rozas, Madrid",
    href: undefined,
  },
  {
    icon: Clock,
    label: "Horario",
    value: "L-V 9:00 - 18:00",
    href: undefined,
  },
  {
    icon: ExternalLink,
    label: "LinkedIn",
    value: "CISEC en LinkedIn",
    href: "https://www.linkedin.com/company/cisec-es",
  },
];

export default function ContactoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema()),
        }}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />

          <FadeContent>
            <div className="mb-12 max-w-2xl">
              <h1>Contacta con nosotros</h1>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Cuéntanos qué necesitas y te responderemos en menos de 24 horas
                con una propuesta adaptada a tu empresa.
              </p>
            </div>
          </FadeContent>

          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Form */}
            <FadeContent className="lg:col-span-3">
              <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
                <ContactForm />
              </div>
            </FadeContent>

            {/* Contact Info */}
            <FadeContent className="lg:col-span-2" delay={200}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold">
                    Información de contacto
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    También puedes contactarnos directamente por cualquiera de
                    estos medios.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                            target={
                              item.href.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              item.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-foreground">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl border border-border bg-muted/50 p-6">
                  <h3 className="font-semibold">Consulta gratuita</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Evaluamos tu caso sin compromiso y te proponemos un plan de
                    acción adaptado a tu infraestructura y presupuesto.
                  </p>
                </div>
              </div>
            </FadeContent>
          </div>
        </div>
      </section>
    </>
  );
}
