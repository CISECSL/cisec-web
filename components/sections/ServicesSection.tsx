"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Shield, Server, FileCheck, AlertTriangle } from "lucide-react";
import { MagneticCard } from "@/components/ui/MagneticCard";

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
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="servicios" className="py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          className="text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          Servicios de Ciberseguridad
        </h2>
        <p
          className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
          }}
        >
          Pentesting manual realizado por expertos certificados. Sin automatismos genéricos, sin falsos positivos.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2" style={{ perspective: "1000px" }}>
          {services.map((service, i) => (
            <MagneticCard key={service.href}>
              <Link
                href={service.href}
                className="group block rounded-xl border border-border bg-card p-6 transition-all duration-500 ease-[cubic-bezier(0,1,0.5,1)] hover:border-primary/50 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translateY(0) rotateX(0) scale(1)"
                    : "translateY(60px) rotateX(8deg) scale(0.95)",
                  transformOrigin: "center bottom",
                  transition: `opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${0.2 + i * 0.12}s, transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.2 + i * 0.12}s`,
                }}
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
            </MagneticCard>
          ))}
        </div>
      </div>
    </section>
  );
}
