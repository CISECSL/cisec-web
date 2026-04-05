import type { Metadata } from "next";
import Link from "next/link";
import { TeamPhoto } from "@/components/ui/TeamPhoto";
import { Shield, MessageSquare, Users, ExternalLink } from "lucide-react";
import { organizationSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FadeContent } from "@/components/ui/FadeContent";

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description:
    "Conoce al equipo de CISEC: expertos certificados en ciberseguridad ofensiva que protegen empresas en España con pentesting manual y auditorías de seguridad.",
  alternates: { canonical: "/sobre-nosotros" },
  openGraph: {
    title: "Sobre Nosotros | CISEC Ciberseguridad",
    description:
      "Equipo de ciberseguridad ofensiva con certificaciones OSCP. Pentesting manual para empresas en España.",
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
    name: "Álvaro Morales Moreno",
    role: "CEO",
    image: "/images/alvaro-morales.jpg",
    description:
      "Lidera la estrategia de CISEC y la relación con clientes. Con más de 20.000 seguidores en LinkedIn, comparte contenido técnico sobre ciberseguridad ofensiva y ayuda a CISOs y CTOs a entender el panorama real de amenazas al que se enfrentan sus organizaciones.",
    linkedin: "https://www.linkedin.com/in/alvaromoralesmoreno/",
  },
  {
    name: "Daniel Lanzas",
    role: "Pentester",
    image: "/images/daniel-lanzas.jpg",
    description:
      "Especialista en ciberseguridad ofensiva que aporta capacidad técnica y una visión fresca al equipo de pentesting. Participa activamente en las auditorías de seguridad, contribuyendo a la identificación de vulnerabilidades complejas en aplicaciones web e infraestructura.",
    linkedin: "#",
  },
  {
    name: "Antonio Harley Loureiro",
    role: "CTO — OSCP Certified",
    image: "/images/antonio-harley.jpg",
    description:
      "Certificado OSCP, lidera todos los proyectos de pentesting de CISEC. Su enfoque combina metodología rigurosa con creatividad técnica para identificar vulnerabilidades que los escáneres automáticos pasan por alto, asegurando que cada auditoría aporta valor real al cliente.",
    linkedin: "https://www.linkedin.com/in/antonioharley/",
  },
];

const values = [
  {
    icon: Shield,
    title: "Pentesting manual, no solo escáneres",
    description:
      "Cada auditoría incluye pruebas manuales realizadas por expertos certificados. Los escáneres automáticos son un punto de partida, no el resultado final. Nuestro equipo analiza la lógica de negocio, cadenas de ataque complejas y configuraciones específicas que ningún scanner detecta.",
  },
  {
    icon: MessageSquare,
    title: "Transparencia total",
    description:
      "Informes claros con evidencias reproducibles, clasificación de riesgos por impacto de negocio y recomendaciones priorizadas. Sin jerga innecesaria ni métricas infladas. Tu equipo técnico y tu dirección reciben exactamente lo que necesitan para tomar decisiones.",
  },
  {
    icon: Users,
    title: "Comunicación directa",
    description:
      "Trabajas directamente con los pentesters que ejecutan las pruebas, sin intermediarios ni capas de gestión. Respuesta en el día, llamadas cuando las necesites y un punto de contacto que conoce tu infraestructura de principio a fin.",
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
              <h1>Sobre CISEC</h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Somos una empresa de ciberseguridad ofensiva especializada en pentesting manual para empresas en España. Nuestro objetivo es sencillo: encontrar las vulnerabilidades de tu organización antes de que lo haga un atacante.
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
              <h2>Por qué nació CISEC</h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
                <p>
                  CISEC nació de una frustración común en el sector: empresas que recibían informes de auditoría generados automáticamente, llenos de falsos positivos y sin contexto de negocio. Informes que acababan en un cajón porque nadie podía priorizar las acciones ni entender el riesgo real.
                </p>
                <p>
                  Decidimos crear una firma de ciberseguridad ofensiva donde cada proyecto recibe la atención de pentesters certificados que entienden tanto la técnica como el negocio. Trabajamos con empresas que necesitan resultados accionables, no documentos de cumplimiento que no aportan valor. Desde PYMEs hasta grandes corporaciones, adaptamos nuestro enfoque a la realidad de cada organización.
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
            <h2>Nuestro equipo</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Un equipo reducido de especialistas con experiencia real en ciberseguridad ofensiva. Sin burocracia, sin rotación de personal.
            </p>
          </FadeContent>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <FadeContent key={member.name} delay={i * 150}>
                <div className="rounded-xl border border-border bg-card overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                  <TeamPhoto
                    src={member.image}
                    alt={`Foto de ${member.name}`}
                    initials={member.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                  />
                  <div className="p-6">
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
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {member.description}
                    </p>
                  </div>
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
            <h2>Cómo trabajamos</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Tres principios que definen cada proyecto que ejecutamos.
            </p>
          </FadeContent>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {values.map((value, i) => (
              <FadeContent key={value.title} delay={i * 150}>
                <div className="rounded-xl border border-border bg-card p-6 transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
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
              <h2>¿Quieres trabajar con nosotros?</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Cuéntanos tu caso y te proponemos un plan adaptado a tu organización. Sin compromiso.
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
