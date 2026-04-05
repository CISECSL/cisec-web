import type { Metadata } from "next";
import Link from "next/link";
import { Shield, MessageSquare, Users, ExternalLink } from "lucide-react";
import { organizationSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FadeContent } from "@/components/ui/FadeContent";

export const metadata: Metadata = {
  title: "Sobre Nosotros | CISEC Ciberseguridad",
  description:
    "Conoce al equipo de CISEC: expertos certificados en ciberseguridad ofensiva que protegen empresas en Espa\u00f1a con pentesting manual y auditor\u00edas de seguridad.",
  alternates: { canonical: "/sobre-nosotros" },
  openGraph: {
    title: "Sobre Nosotros | CISEC Ciberseguridad",
    description:
      "Equipo de ciberseguridad ofensiva con certificaciones OSCP. Pentesting manual para empresas en Espa\u00f1a.",
    url: "https://cisec.es/sobre-nosotros",
    siteName: "CISEC Ciberseguridad",
    locale: "es_ES",
    type: "website",
  },
};

const breadcrumbItems = [
  { name: "Sobre Nosotros", href: "/sobre-nosotros" },
];

const team = [
  {
    name: "\u00c1lvaro Morales Moreno",
    role: "CEO",
    description:
      "Lidera la estrategia de CISEC y la relaci\u00f3n con clientes. Con m\u00e1s de 20.000 seguidores en LinkedIn, comparte contenido t\u00e9cnico sobre ciberseguridad ofensiva y ayuda a CISOs y CTOs a entender el panorama real de amenazas al que se enfrentan sus organizaciones.",
    linkedin: "https://www.linkedin.com/in/alvaromoralesmoreno/",
  },
  {
    name: "Antonio Harley Loureiro",
    role: "CTO",
    description:
      "Certificado OSCP, lidera todos los proyectos de pentesting de CISEC. Su enfoque combina metodolog\u00eda rigurosa con creatividad t\u00e9cnica para identificar vulnerabilidades que los esc\u00e1neres autom\u00e1ticos pasan por alto, asegurando que cada auditor\u00eda aporta valor real al cliente.",
    linkedin: "https://www.linkedin.com/in/antonioharley/",
  },
];

const values = [
  {
    icon: Shield,
    title: "Pentesting manual, no solo esc\u00e1neres",
    description:
      "Cada auditor\u00eda incluye pruebas manuales realizadas por expertos certificados. Los esc\u00e1neres autom\u00e1ticos son un punto de partida, no el resultado final. Nuestro equipo analiza la l\u00f3gica de negocio, cadenas de ataque complejas y configuraciones espec\u00edficas que ning\u00fan scanner detecta.",
  },
  {
    icon: MessageSquare,
    title: "Transparencia total",
    description:
      "Informes claros con evidencias reproducibles, clasificaci\u00f3n de riesgos por impacto de negocio y recomendaciones priorizadas. Sin jerga innecesaria ni m\u00e9tricas infladas. Tu equipo t\u00e9cnico y tu direcci\u00f3n reciben exactamente lo que necesitan para tomar decisiones.",
  },
  {
    icon: Users,
    title: "Comunicaci\u00f3n directa",
    description:
      "Trabajas directamente con los pentesters que ejecutan las pruebas, sin intermediarios ni capas de gesti\u00f3n. Respuesta en el d\u00eda, llamadas cuando las necesites y un punto de contacto que conoce tu infraestructura de principio a fin.",
  },
];

export default function SobreNosotrosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema()),
        }}
      />

      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />

          <FadeContent>
            <div className="max-w-3xl">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Sobre CISEC
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Somos una empresa de ciberseguridad ofensiva especializada en
                pentesting manual para empresas en Espa\u00f1a. Nuestro objetivo es
                sencillo: encontrar las vulnerabilidades de tu organizaci\u00f3n antes
                de que lo haga un atacante.
              </p>
            </div>
          </FadeContent>
        </div>
      </section>

      {/* Mission */}
      <section className="border-t border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeContent>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Por qu\u00e9 naci\u00f3 CISEC
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  CISEC naci\u00f3 de una frustraci\u00f3n com\u00fan en el sector: empresas que
                  recib\u00edan informes de auditor\u00eda generados autom\u00e1ticamente, llenos
                  de falsos positivos y sin contexto de negocio. Informes que
                  acababan en un caj\u00f3n porque nadie pod\u00eda priorizar las acciones ni
                  entender el riesgo real.
                </p>
                <p>
                  Decidimos crear una firma de ciberseguridad ofensiva donde cada
                  proyecto recibe la atenci\u00f3n de pentesters certificados que
                  entienden tanto la t\u00e9cnica como el negocio. Trabajamos con
                  empresas que necesitan resultados accionables, no documentos de
                  cumplimiento que no aportan valor. Desde PYMEs hasta grandes
                  corporaciones, adaptamos nuestro enfoque a la realidad de cada
                  organizaci\u00f3n.
                </p>
              </div>
            </div>
          </FadeContent>
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-border bg-muted/30 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeContent>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Nuestro equipo
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Un equipo reducido de especialistas con experiencia real en
              ciberseguridad ofensiva. Sin burocracia, sin rotaci\u00f3n de personal.
            </p>
          </FadeContent>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {team.map((member, i) => (
              <FadeContent key={member.name} delay={i * 150}>
                <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold">{member.name}</h3>
                      <p className="text-sm font-medium text-primary">
                        {member.role}
                      </p>
                    </div>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors hover:bg-primary/20"
                      aria-label={`LinkedIn de ${member.name}`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    {member.description}
                  </p>
                </div>
              </FadeContent>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeContent>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              C\u00f3mo trabajamos
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Tres principios que definen cada proyecto que ejecutamos.
            </p>
          </FadeContent>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {values.map((value, i) => (
              <FadeContent key={value.title} delay={i * 150}>
                <div className="rounded-xl border border-border bg-card p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </FadeContent>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-muted/30 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeContent>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                \u00bfQuieres trabajar con nosotros?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Cu\u00e9ntanos tu caso y te proponemos un plan adaptado a tu
                organizaci\u00f3n. Sin compromiso.
              </p>
              <div className="mt-8">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Contactar con CISEC
                </Link>
              </div>
            </div>
          </FadeContent>
        </div>
      </section>
    </>
  );
}
