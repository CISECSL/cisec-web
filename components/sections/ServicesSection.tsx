import Link from "next/link";
import { Shield, Server, FileCheck, AlertTriangle } from "lucide-react";
import { FadeContent } from "@/components/ui/FadeContent";

const services = [
  {
    icon: Shield,
    title: "Pentesting Web",
    description:
      "Auditoría manual de aplicaciones web siguiendo OWASP Top 10 y PTES. Detectamos lo que los scanners no ven.",
    price: "Desde 3.500€",
    href: "/servicios/pentesting-web",
  },
  {
    icon: Server,
    title: "Pentesting Infraestructura",
    description:
      "Evaluación de seguridad de redes, servidores y entornos cloud (AWS, GCP, Azure). Interno y externo.",
    price: "Desde 4.000€",
    href: "/servicios/pentesting-infraestructura",
  },
  {
    icon: FileCheck,
    title: "Auditoría ENS",
    description:
      "Cumplimiento del Esquema Nacional de Seguridad. Gap analysis, auditoría técnica y acompañamiento.",
    price: "Consultar",
    href: "/servicios/cumplimiento-ens",
  },
  {
    icon: AlertTriangle,
    title: "Respuesta a Incidentes",
    description:
      "Contención, erradicación y forensic ante incidentes de ciberseguridad. Respuesta inicial en menos de 2 horas.",
    price: "Urgente 24h",
    href: "/servicios/respuesta-incidentes",
  },
];

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeContent>
          <h2 className="text-center text-3xl font-bold sm:text-4xl">Servicios de Ciberseguridad</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Pentesting manual realizado por expertos certificados. Sin automatismos genéricos, sin falsos positivos.
          </p>
        </FadeContent>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => (
            <FadeContent key={service.href} delay={i * 100}>
              <Link
                href={service.href}
                className="group block rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
              >
                <service.icon className="h-8 w-8 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">{service.price}</span>
                  <span className="text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                    Saber más →
                  </span>
                </div>
              </Link>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}
