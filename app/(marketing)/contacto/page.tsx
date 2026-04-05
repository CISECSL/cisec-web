import type { Metadata } from "next";
import { Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import { localBusinessSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ContactForm } from "@/components/forms/ContactForm";
import { FadeContent } from "@/components/ui/FadeContent";

export const metadata: Metadata = {
  title: "Contacto | CISEC Ciberseguridad",
  description:
    "Contacta con CISEC para una consulta gratuita sobre pentesting, auditor\u00eda de seguridad o cumplimiento normativo. Respuesta en menos de 24 horas.",
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
    label: "Ubicaci\u00f3n",
    value: "Las Rozas, Madrid",
    href: undefined,
  },
  {
    icon: Clock,
    label: "Horario",
    value: "L\u2013V 9:00\u201318:00",
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
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />

          <FadeContent>
            <div className="mb-12 max-w-2xl">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Contacta con nosotros
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Cu\u00e9ntanos qu\u00e9 necesitas y te responderemos en menos de 24 horas
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
                    Informaci\u00f3n de contacto
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Tambi\u00e9n puedes contactarnos directamente por cualquiera de
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
                    acci\u00f3n adaptado a tu infraestructura y presupuesto.
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
